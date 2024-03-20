
import React, { useEffect, useState } from 'react'



const Gallery = () => {
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

  console.log(data);

  return (
    <div className='grid grid-cols-3 auto-rows-max gap-4'>
      {data.map((dat)=>{
        return(

          <div key={dat.name} className='card w-96 bg-base-100 shadow-xl'>
            <figure><img src={dat.imageURL}/></figure>
            <div className='card-body'>
              <h2 className='card-title'>{dat.name}</h2>
              <p>{dat.rating} ⭐</p>
              <p>{dat.seats} Sitze</p>
              <p>{dat.horsePower}</p>
            
            <div className='card-actions justify-end'>
              <a href={`/boot/${dat._id}`} className='btn btn-primary'>Details</a>
              </div>
            </div>
            </div>

        )
      })}

    </div>
  )
}

export default Gallery