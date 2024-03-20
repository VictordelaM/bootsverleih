import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const DetailPage = () => {
  const [bootData, setBootData] = useState([]);
  const [formBootData, setFormBootData] = useState([]);
  const navigate = useNavigate();


  const bootID = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/boote/details/${bootID.id}`)
      .then((res) => res.json())
      .then((data) => {
        setBootData(data);
        setFormBootData(data);
      });
  }, [bootID.id]);

  console.log(bootData.name);

  const handleSubmit = (event) =>{
      event.preventDefault()
      const form = event.target
      const formData = new FormData(form)
      fetch(`http://localhost:3000/boote/details/${bootID.id}`, {
        method: "PATCH",
        body: formData
    } )
    setBootData(formBootData)
  };

  const deleteBoat = () =>{
    fetch(`http://localhost:3000/boote/details/${bootID.id}`, {
      method: "DELETE",
      body: {_id : bootID}
  })
  navigate('/gallery')
  }

  return (
    <>
      <div key={bootData.name} className="card card-side bg-base-100 shadow-xl">
        <figure>
          <img src={bootData.imageURL} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{bootData.name}</h2>
          <p>{bootData.rating} ⭐</p>
          <p>{bootData.seats} Sitze</p>
          <p>{bootData.horsePower} PS</p>

          <div className="card-actions justify-end">
            <a href={`../gallery`} className="btn btn-primary">
              Zurück
            </a>
          </div>
        </div>
      </div>

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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={formBootData.name}
          onChange={(e) =>
            setFormBootData((prevState) => ({
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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={formBootData.rating}
          onChange={(e) =>
            setFormBootData((prevState) => ({
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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={formBootData.seats}
          onChange={(e) =>
            setFormBootData((prevState) => ({
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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={formBootData.horsePower}
          onChange={(e) =>
            setFormBootData((prevState) => ({
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
          className="block flex-1 border-0 bg-transparent py-1.5 pl-1 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
          value={formBootData.imageURL}
          onChange={(e) =>
            setFormBootData((prevState) => ({
              ...prevState,
              imageURL: e.target.value,
            }))
          }
        />
        <button className="btn btn-primary">Speichern</button>
      </form>
      <button className="btn btn-error" onClick={deleteBoat}>Boot löschen</button>
    </>
  );
};

export default DetailPage;
