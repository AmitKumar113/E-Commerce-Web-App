import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Item from './item'

export default function CartItems() {
  
    const cart = useSelector(state => state.cart) 

    return (
        <div className='flex flex-wrap justify-center  '>
            <div className='w-11/12 border-black border-2'>
                <div className='flex border-2 my-2 [&>*]:mx-2'>
                    <span className='flex-1 text-right'>cart total</span>
                    <span>{cart.cartSubTotal}</span>
                    <div className='bg-cyan-500 cursor-pointer'>order</div>
                </div>
                <span>Items in your cart</span>
                <div className='flex flex-wrap justify-center'>{
                    cart.cartItems.map(item => {
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
