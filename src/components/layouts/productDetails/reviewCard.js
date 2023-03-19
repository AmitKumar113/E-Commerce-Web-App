import React from 'react'
import ReactStars from "react-rating-stars-component";
import Profile from '../../../images/Profile.png'

export default function reviewCard(props) {
  
    const {_id, name, avatar, rating, comment} = props.review
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
            <div className='flex items-center' >
                <div className={`w-6 h-6 border-[1px] border-gray-700/80  bg-[url(${avatar || Profile})] bg-cover bg-center rounded-full`}></div>
                <span className='mr-8 ml-2'>{name}</span>
            </div>
            <div ><ReactStars {...options} /></div>
        </div>
        <div className='mb-2 mx-4'>{comment}</div>
    </div>
  )
}
