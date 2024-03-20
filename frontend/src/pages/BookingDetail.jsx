import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


const BookingDetail = () => {
  const [reservationData, setReservationData] = useState([]);
  const [formReservationData, setFormReservationData] = useState([]);
  const [data, setData] = useState([])
  const [fetchToggle, setFetchToggle] = useState()
  const navigate = useNavigate();


  const reservationID = useParams();

  
  
  useEffect(()=>{
    fetch("http://localhost:3000/boote")
    .then((response)=> response.json())
    .then((json)=>{
      return(
        setData(json)
      )
    })
  }, [])

  useEffect(() => {
    fetch(`http://localhost:3000/reservierungen/details/${reservationID.id}`)
      .then((res) => res.json())
      .then((data) => {
        setReservationData(data);
        setFormReservationData(data);
      });
  }, [reservationData, reservationID.id]);


  const handleSubmit = (event) =>{
      event.preventDefault()
      const form = event.target
      const formData = new FormData(form)
      fetch(`http://localhost:3000/reservierungen/details/${reservationID.id}`, {
        method: "PATCH",
        body: formData
    } )
    setFormReservationData(formReservationData)
    setReservationData(reservationData)
    setFetchToggle(!fetchToggle)
  };

  const deleteReservation = () =>{
    fetch(`http://localhost:3000/reservierungen/details/${reservationID.id}`, {
      method: "DELETE",
      body: {_id : reservationID}
  })
  navigate('/booking')
  }

  return (
    <>
      <div key={reservationData._id} className='card w-96 bg-base-100 shadow-xl'>
            <div className='card-body'>
              <h2 className='card-title'>{reservationData.date}</h2>
              <h2 className='card-title'>{reservationData.boot?.name}</h2>
            <div className='card-actions justify-end'>
              <a href={`/reservierungen/${reservationData._id}`} className='btn btn-primary'>Details</a>
              </div>
            </div>
            </div>

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
            <option key={dat._id} value={dat._id}>{dat.name}</option>
            )
          })}
          </select>
        <button className="btn btn-primary">Speichern</button>
      </form>
      <button className="btn btn-error" onClick={deleteReservation}>Reservierung löschen</button>
    </>
  );
};

export default BookingDetail;
