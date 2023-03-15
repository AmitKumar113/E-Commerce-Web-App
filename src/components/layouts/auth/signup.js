import React from 'react'
import axios from "axios"
import './form.css'
import { Link, Navigate } from 'react-router-dom'


function signup() {

  const handleSubmit= async (e)=>{
    e.preventDefault()
    console.log("form submitted")

    let user = {
      name : document.querySelector('[name="name"]').value,
      email : document.querySelector('[name="email"]').value.toLowerCase(),
      password : document.querySelector('[name="password"]').value
    };
    
    const config = { headers: { "Content-Type": "application/json" } };

  const { data } = await axios.post(
    `http://localhost:5500/signup`,
     user ,
    config
  );

      console.log({data})
      // history.go(-1)
      window.location.replace(`/login`)
      // <Navigate to={"/login"}/>
    }


  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div className=' flex flex-col w-1/3 h-3/4 pt-4 bg-slate-300'>
      <span className='text-center text-3xl py-6'>Signup</span>
        <form className='flex-box-column [&>*]:w-4/5 [&>*]:h-12 [&>*]:my-1 [&>*]:px-2' onSubmit={handleSubmit}>
            <input placeholder='Full Name' name="name"></input>
            <input placeholder='Email' name="email"></input>
            <input placeholder='Password' name="password"></input>
            <button type='submit' className='btn py-4 px-12 bg-green-600 my-8'>Signup</button>
            <p className='text-sm'>Already have an account? 
              <Link to='/login'><span className='underline pl-2'>Login</span></Link></p>
      </form>
      </div>
    </div>
  )
}

export default signup;