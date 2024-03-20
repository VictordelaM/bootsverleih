import React, { useEffect, useState } from 'react'

const Booking = () => {
  const [data, setData] = useState([])
  
  useEffect(()=>{
    fetch("http://localhost:3000/reservierungen")
    .then((response)=> response.json())
    .then((json)=>{
      return(
        setData(json)
      )
    })
  }, [])

  console.log(data);

  return (
    <div className='grid grid-cols-3 auto-rows-max gap-4'>
      {data.map((dat)=>{
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
  )
}

export default Booking