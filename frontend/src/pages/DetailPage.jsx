import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const DetailPage = () => {
  const [bootData, setBootData] = useState([])
  let bootID = useParams()


  useEffect(() => {
    fetch(`http://localhost:3000/boote/details/${bootID.id}`)
    .then(res => res.json())
    .then(data => {
      setBootData(data)
    })
  }
  , [bootID.id])

  console.log(bootData.name)

  return (
    <>
        <div key={bootData.name}>
          <h3>{bootData.name}</h3>
          <p>{bootData.rating}</p>
          <p>{bootData.seats}</p>
          <p>{bootData.horsePower}</p>
          </div>
    </>
  )
}

export default DetailPage