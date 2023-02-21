import React, { useEffect, useSelector } from 'react'
import './card.css'

export default function Card(props) {

//  useEffect(()=>{

  //  console.log({props})

//  },[])
const name = useSelector(state=>state.items );


  return (
    <div className='card border'>
        <div className='card-image border-red'>

        </div>
        <div className='card-details'>
            <p className='card-title'>{name || 'product naame'}</p>
            <p className='card-description'>{props.description || 'product description'}</p>
        </div>
    </div>
  )
}
