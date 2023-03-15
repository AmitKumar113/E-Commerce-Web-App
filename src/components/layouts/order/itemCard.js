import React from 'react'

export default function itemCard(props) {

    const { id, name, price, ratings, quantity, image_url, Stock } = props.item 

  return (
    <div className='border-[1px] border-b-black flex m-1 p-2 justify-center w-[65%]'>
    <div className={`bg-[url(${image_url})]  bg-center bg-cover border-2 w-24 h-24`}></div>
    <div className='flex w-3/5 px-4 flex-1 justify-around items-center [&>*]:h-full [&>*]:flex [&>*]:items-center'>
                <p className='text-2xl border-[1px] border-l-gray'>{name}</p>
                <span className=' text-xl'>Qty : {quantity}</span>
                <span className='font-bold text-xl'>₹{price}</span>
    </div>
</div>
  )
}
