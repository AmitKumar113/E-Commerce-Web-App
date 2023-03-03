import React from 'react'
import axios from "axios"
import './form.css'
import { getUser } from '../../../Actions/userActions'
import { useDispatch } from 'react-redux/es/exports'

export default function Login({ history }) {

  const dispatch = useDispatch()

  const HandleLogin = (e) => {
    e.preventDefault()
    console.log("first")
    let user = {
      email: document.querySelector('[name="email"]').value.toLowerCase(),
      password: document.querySelector('[name="password"]').value
    };

    dispatch(getUser(user))
    // window.location.href = '/'
    // e.target.reset()
    // history.push("/signup")
    // history.go(-1)
    // window.location.replace(`/electronincs`)

  }


  return (
    <div className='h-[80vh] flex justify-center items-center'>
      <div className='login-container flex flex-col w-1/3 h-3/4 pt-4 bg-slate-300'>

      <span className='text-center text-3xl py-8'>Login</span>

      <form className='login-form flex-box-column' onSubmit={HandleLogin}>
          <input placeholder='Email' name="email"></input>
          <input placeholder='Password' name="password"></input>
          <button type='submit' className='btn py-4 px-12 bg-green-600 my-8' >Login</button>
      </form>

      </div>
    </div>
  )
}
