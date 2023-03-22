import React from 'react'
import { Link } from 'react-router-dom'
import addIcon from '../../../images/icons/add-icon.svg'

export default function addProductBtn() {

    console.log("first addProductbtn")

  return (
        <Link to='/addProduct'>
        <div title='add Product' className='w-12 h-12 rounded-full bg-green-600 fixed z-50 bottom-8 right-8 cursor-pointer flex justify-center items-center'>
            <img src={addIcon} title="Add New Product"></img>
        </div>
        </Link>
  ) 
}
