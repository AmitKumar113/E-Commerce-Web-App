import React from 'react'
import ReactStars from "react-rating-stars-component";


export default function reviewCard(props) {
  
    const {_id, name, rating, comment} = props.review
    const options = {
        edit: false, // false: readonly
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: rating,
        isHalf: true, //true: half star
    }

    return (
    <div key={_id} className='flex-col border-b-2 border-gray-500'>
        <div className='flex mt-2'>
            <span className='mr-8 '>{name}</span>
            <div ><ReactStars {...options} /></div>
        </div>
        <div className='mb-2'>{comment}</div>
    </div>
  )
}
