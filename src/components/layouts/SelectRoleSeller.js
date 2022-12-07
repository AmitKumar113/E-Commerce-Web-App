import React from 'react'
import './SelectRole.css'
import {Link} from "react-router-dom"


function SelectRoleSeller() {
  return (
    <div className='Select-role-block border'>SelectRoleSeller
      <Link to='/signup/seller'><button>Signup</button></Link>
    </div>
  )
}

export default SelectRoleSeller