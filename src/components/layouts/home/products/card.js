import React, { useEffect } from 'react'
// import './card.css'

export default function Card(props) {
  // console.log(props.product.name)
    const {name, price, description , ratings } = props.product
  return (
    <div className='border m-3 bg-white w-72 h-60'>
        <div className='border-red h-4/6'>
              image
        </div>
        <div className='card-details'>
            <p className='text-center text-xl'>{name || 'product naame'}</p>
            <span className='card-price'>Price: {price || 'product price'}</span>
            {/* <span className='card-price'>{ratings || 'product rating'}</span> */}
            <p className='card-description'>{description || 'product description'}</p>
        </div>
    </div>
  )
}
