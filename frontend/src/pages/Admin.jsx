import React from 'react'
import { Form } from 'react-router-dom'

const Admin = () => {
  const subAdd = (event)=>{
    event.preventDefault()
    const form = event.target
    const formData = new FormData(form)
    fetch("http://localhost:3000/boote", {
      method: "POST",
      body: formData
    })
    

    
      console.log("test");
  }
  return (
    <div>
    <form onSubmit={subAdd}>
      <input type="text" name="name" placeholder='input a name' required/>
      <input type="number" name="rating" placeholder='input rating' required/>
      <input type="number" name="seats" placeholder='input the number of seats' required/>
      <input type="number" name="horsePower" placeholder='how many horses are on the boat?' required/>
      <input type="text" name="imageURL" placeholder="http://example.URL.goFindTheFuck"/>
      <button>ADD A BOAT</button>
    </form>
    </div>
  )
}

export default Admin