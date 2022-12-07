import React from 'react'
import './SelectRole.css'
import {Link} from "react-router-dom"

function SelectRoleBuyer() {
  return (
  <>
    <div className='Select-role-block border'>SelectRoleBuyer
      <Link to='/signup/buyer'><button>Signup</button></Link>
    </div>
    {/* <p title='hi'>tooltip</p> */}
  </>
  )
}

export default SelectRoleBuyer