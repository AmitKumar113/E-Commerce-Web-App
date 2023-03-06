import React from 'react'
import { useSelector } from 'react-redux'
import Item from './item'

export default function CartItems() {
  
    const cartItems = useSelector(state => state.cart)
  
    return (
    <div className='flex flex-wrap justify-center  '>
        <div className='w-11/12 border-black border-2'>
            <span>Items in your cart</span>
            <div className='flex flex-wrap justify-center'>{
                cartItems.map(item => {
                    return (
                        <Item item={item}></Item>
                    )
                })
                }
            </div>
        </div>
    </div>
  )
}
