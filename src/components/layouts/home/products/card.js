import React, { useEffect } from 'react'
import './card.css'

export default function Card(props) {

  return (
    <div className='card border'>
        <div className='card-image border-red'>

        </div>
        <div className='card-details'>
            <p className='card-title'>{'product naame'}</p>
            <p className='card-description'>{props.description || 'product description'}</p>
        </div>
    </div>
  )
}
