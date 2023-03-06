import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateQuantityOfItem, removeItem } from '../../../Actions/cartActions'

export default function Item(props) {
    const dispatch = useDispatch()
    const { id, name, price, ratings, quantity } = props.item
    
    const HandleRemoveItem = ()=>{
            dispatch(removeItem(id))
    }

    const decQuantity = ()=>{
        if(quantity > 1){
            let updatedQty = quantity -1;
            dispatch(updateQuantityOfItem({id, updatedQty}))
        }
    }
    
    const incQuantity = ()=>{
            let updatedQty = quantity +1;
            dispatch(updateQuantityOfItem({id, updatedQty}))
    }


    return (
    <div className='border-2 border-black flex m-1 p-3 justify-center w-[45%]'>
        <div className=' border-red-300 border-2 w-2/5 h-60'>image</div>
        <div className='flex flex-col  w-3/5 px-4'>
            <div className='flex-1'>
                <p className='text-2xl '>{name}</p>
                <div className='flex'>
                    <span className='w-1/2 text-lg'>Price: <span className='font-bold text-xl'>${price}</span></span>
                    <span className='w-1/2 text-right'>{ratings} ⭐ </span>
                </div>
            </div>
            <div className='my-3'>
                <button className='py-1 px-4 bg-slate-500 text-3xl' onClick={()=>decQuantity()}>-</button>
                <span className='py-2 px-4'>{quantity}</span>
                <button className='py-1 px-4 bg-slate-500 text-3xl' onClick={()=>incQuantity()}>+</button>
            </div>
            <div className='flex [&>*]:text-center [&>*]:cursor-pointer' >
                 <div className='w-1/2 py-2' onClick={()=>HandleRemoveItem()}> remove</div>
                 <div className='w-1/2 py-2 bg-cyan-500 rounded-lg'>Buy Now</div>
            </div>
        </div>
    </div>
  )
}
