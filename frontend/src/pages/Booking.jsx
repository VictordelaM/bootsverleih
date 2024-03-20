import React, { useEffect, useState } from 'react'

const Booking = () => {
  const [reservationData, setReservationData] = useState([])
  const [showModal, setShowModal] = useState(false)
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/boote")
    .then((response)=> response.json())
    .then((json)=>{
      return(
        setData(json)
      )
    })
  }, [])

  useEffect(()=>{
    fetch("http://localhost:3000/reservierungen")
    .then((response)=> response.json())
    .then((json)=>{
      return(
      setReservationData(json)
      )
    })
  }, [])

  const handleSubmit = (event) =>{
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    fetch(`http://localhost:3000/reservierungen/`, {
      method: "POST",
      body: formData
  } )
  setFormReservationData(formReservationData)
  setReservationData(reservationData)
  setFetchToggle(!fetchToggle)
};

  return (
    <>
    <h1>Reservationen</h1>
    <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        neue Reservierung
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
                    Neue Reservierung
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
          Boot
        </label>
        <select
          name="boot"
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          onChange={(e) =>
            setFormReservationData((prevState) => ({
              ...prevState,
              boot: e.target.value
            }))
          }
        >

          {data.map((dat) => {
            return (
            <option key={dat._id} value={dat._id} className='w-full'>{dat.name}</option>
            )
          })}
          </select>
        <button className="btn btn-primary">Speichern</button>
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
      {reservationData.map((dat)=>{
        return(

          <div key={dat._id} className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{dat.date}</h2>
            <div className='card-actions justify-end'>
              <a href={`/reservierungen/${dat._id}`} className='btn btn-primary'>Details</a>
              </div>
            </div>
            </div>

        )
      })}

    </div>
    </>
  )
}

export default Booking