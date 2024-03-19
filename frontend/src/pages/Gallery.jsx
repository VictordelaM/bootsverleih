
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
    <div>
      {data.map((dat)=>{
        return(

          <div key={dat.name}>
            <h3>{dat.name}</h3>
            <p>{dat.rating}</p>
            <p>{dat.seats}</p>
            <p>{dat.horsePower}</p>
            <img src={dat.imageURL}/>
            </div>

        )
      })}
    </div>
  )
}

export default Gallery