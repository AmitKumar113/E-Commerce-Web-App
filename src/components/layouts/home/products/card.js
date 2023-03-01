import React, { useEffect } from 'react'
import './card.css'

export default function Card(props) {
  // console.log(props.product.name)
    const {name, price, description , rating} = props.product
  return (
    <div className='card border'>
        <div className='card-image border-red'>

        </div>
        <div className='card-details'>
            <p className='card-title'>{name || 'product naame'}</p>
            <p className='card-price'>{price || 'product price'}</p>
            <p className='card-description'>{description || 'product description'}</p>
        </div>
    </div>
  )
}
