import React from 'react'
import axios from "axios"
import './form.css'


function signup() {

  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log("form submitted")

    let user = {
      name : document.querySelector('[name="name"]').value,
      email : document.querySelector('[name="email"]').value,
      password : document.querySelector('[name="password"]').value
    };
    
    const config = { headers: { "Content-Type": "application/json" } };

  const { data } = await axios.post(
    `http://localhost:5500/signup`,
     user ,
    config
  );

      console.log({data})
    }

    // window.location.replace(`http://localhost:3000/login`)

  return (
    <div className='signup-container flex-box-column border'>
      <h2>Signup</h2>
    <form className='signup-form flex-box-column' onSubmit={handleSubmit}>
        <input placeholder='Full Name' name="name"></input>
        <input placeholder='Email' name="email"></input>
        <input placeholder='Password' name="password"></input>
        <button type='submit' className='btn'>Signup</button>
    </form>
      </div>
  )
}

export default signup;