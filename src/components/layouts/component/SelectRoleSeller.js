import React from 'react'
import './SelectRole.css'
import {Link} from "react-router-dom"


function SelectRoleSeller() {
  return (
    <>
    <div className='flex flex-col Select-role-block border min-w-xs max-w-sm p-2 bg-white rounded-lg'>
      <div className='mx-2'>
        <p className='text-lg font-mono text-justify'> If you want to sell products and manage your shop on this platform with convenience then go with this option. </p>
      </div>
      <div className='flex-1 mx-3 my-4'>
          <ul className='[&>*]:font-mono text-xl'>
            <li>✔  Buy Products</li>
            <li>✔  Manange Cart</li>
            <li>✔ Manage Shop</li>
            <li>✔ Sell Products</li>
          </ul>
      </div>
      <div className='flex justify-end'>
      <Link to='/signup/seller' className='w-full'><div className='w-full py-2 text-center bg-green-500/90 hover:bg-green-500/50 text-xl'>Seller</div></Link>
      </div>
    </div>
  </>
  )
}

export default SelectRoleSeller