
import React, { useEffect, useState } from 'react'



const Gallery = () => {
  const [data, setData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [newBoatData, setNewBoatData] = useState([])

  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    fetch(`http://localhost:3000/boote/`, {
      method: "POST",
      body: formData
  })
};
  
  useEffect(()=>{
    fetch("http://localhost:3000/boote")
    .then((response)=> response.json())
    .then((json)=>{
      return(
        setData(json)
      )
    })
  }, [])

  console.log(data);

  return (
    <>
    <h1>Boote</h1>
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        neues Boot
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className=" rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Neues Boot
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent  text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                <form onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="block text-sm font-medium leading-6"
        >
          Name
        </label>
        <input
          type="text"
          name="name"
          className="block w-full max-w-xs flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 shadow-xl"
          value={newBoatData.name}
          onChange={(e) =>
            setNewBoatData((prevState) => ({
              ...prevState,
              name: e.target.value,
            }))
          }
        />
                <label
          htmlFor="rating"
          className="block text-sm font-medium leading-6"
        >
          Rating
        </label>
        <input
          type="text"
          name="rating"
          className="block flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 shadow-xl w-full"
          value={newBoatData.rating}
          onChange={(e) =>
            setsetNewBoatData((prevState) => ({
              ...prevState,
              rating: e.target.value,
            }))
          }
        />
                <label
          htmlFor="seats"
          className="block text-sm font-medium leading-6"
        >
          Seats
        </label>
        <input
          type="text"
          name="seats"
          className="block flex-1 border-2 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 shadow-xl w-full"
          value={newBoatData.seats}
          onChange={(e) =>
            setsetNewBoatData((prevState) => ({
              ...prevState,
              seats: e.target.value,
            }))
          }
        />
                <label
          htmlFor="horsePower"
          className="block text-sm font-medium leading-6"
        >
          Horsepower
        </label>
        <input
          type="text"
          name="horsePower"
          className="block flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 shadow-xl w-full"
          value={newBoatData.horsePower}
          onChange={(e) =>
            setsetNewBoatData((prevState) => ({
              ...prevState,
              horsePower: e.target.value,
            }))
          }
        />
                <label
          htmlFor="imageURL"
          className="block text-sm font-medium leading-6"
        >
          Image URL
        </label>
        <input
          type="text"
          name="imageURL"
          className="block flex-1  bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 border-2 shadow-xl w-full"
          value={newBoatData.imageURL}
          onChange={(e) =>
            setsetNewBoatData((prevState) => ({
              ...prevState,
              imageURL: e.target.value,
            }))
          }
        />
        <button className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">Speichern</button>
      </form>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Schließen
                  </button>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    <div className='grid grid-cols-3 auto-rows-max gap-4'>
      {data.map((dat)=>{
        return(

          <div key={dat.name} className='card w-96 bg-base-100 shadow-xl'>
            <figure><img src={dat.imageURL}/></figure>
            <div className='card-body'>
              <h2 className='card-title'>{dat.name}</h2>
              <p>{dat.rating} ⭐</p>
              <p>{dat.seats} Sitze</p>
              <p>{dat.horsePower} PS</p>
            
            <div className='card-actions justify-end'>
              <a href={`/boot/${dat._id}`} className='btn btn-primary'>Details</a>
              </div>
            </div>
            </div>

        )
      })}

    </div>


    </>
  );
}

export default Gallery