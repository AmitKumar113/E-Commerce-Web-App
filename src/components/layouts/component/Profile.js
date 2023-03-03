import React from 'react'
import { useSelector } from 'react-redux/es/exports'

export default function Profile() {
  
  const user = useSelector(state => state.user)
  
  return (
    //to add - address, email, mobile no, delete account option
    <>
    <div>Profile</div>
    <div>{user.name}</div>  
    </>
  )
}
