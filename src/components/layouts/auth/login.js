import React from 'react'
import axios from "axios"
import './form.css'

export default function login() {

  const handleLogin = async (e) => {
    e.preventDefault()

    let user = {
      email: document.querySelector('[name="email"]').value,
      password: document.querySelector('[name="password"]').value
    };

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post(
      `http://localhost:5500/login`,
      user,
      config
    );

    localStorage.setItem("auth-token",data.authtoken)

    window.open('/',"_self")
    console.log(data.authtoken)
  }


  return (
    <div className='login-container flex-box-column border'>
      <h2>login</h2>

      <form className='login-form flex-box-column' onSubmit={handleLogin}>
        <input placeholder='Email' name="email"></input>
        <input placeholder='Password' name="password"></input>
        <button type='submit' className='btn' >Login</button>

      </form>

    </div>
  )
}
