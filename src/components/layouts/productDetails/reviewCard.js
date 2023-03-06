import React from 'react'

export default function reviewCard(props) {
  
    const {_id, name, rating, comment} = props.review
    return (
    <div key={_id} className='flex-col border-b-2 border-gray-500'>
        <div className='flex mt-2'>
            <span className='mr-8 '>{name}</span>
            <div >{rating} ⭐</div>
        </div>
        <div className='mb-2'>{comment}</div>
    </div>
  )
}
