import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../../../Actions/cartActions'
import { Link } from "react-router-dom"


export default function Card(props) {

  const dispatch = useDispatch()
  const {_id, name, price, description , ratings } = props.product
    
  const HandleAddToCart = () => {
    console.log("first")
      dispatch(addToCart(_id))
  }

  return (
    <div className='flex-col shadow-xl  bg-white w-72 h-64'>
        <div className=' border-red h-3/5'>
        <Link to={`/product/details/${_id}`}><div>image</div></Link>
        </div>
        <div className='flex-col flex-1'>
            <div className='flex-1'>
              <p className='text-center text-xl'>{name || 'product naame'}</p>
              <span className='card-price'>Price: {price || 'product price'}</span>
              <span className='ml-6'>{ratings || '0'} ⭐</span>
            </div>
            <div className='flex flex-1 [&>*]:text-center [&>*]:cursor-pointer'>
              <div className='w-1/2 mx-2 py-1.5' onClick={()=>{HandleAddToCart()}}>Add to cart</div>
              <div className='w-1/2 mx-2 py-1.5 bg-cyan-500 rounded-lg'>Buy Now</div>
            </div>
        </div>
    </div>
  )
}
{/* <span className='card-description'>{description || 'product description'}</span> */}
