import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export default function Profile() {
  
  const user = useSelector(state => state.user)
  console.log(user)

  return (
    //to add - address, email, mobile no, delete account option
    <>
    <div className='flex justify-center min-h-[80vh]'>
    <div className='w-4/5 border my-2 px-8 [&>*]:my-3'>
        <div className='text-2xl text-center'>My Account</div>
        <div className='flex text-xl [&>*]:mx-3'>
            <div>Full Name :</div>
            <div>{user.name}</div>
        </div>  
        <div className='flex text-xl [&>*]:mx-3'>
            <div>E-mail :</div>
            <div>{user.email}</div>
        </div> 
        <div className='text-center text-xl cursor-pointer text-red-600 bg-slate-300'>
          delete account
        </div> 
    </div>
    </div>
    </>
  )
}
