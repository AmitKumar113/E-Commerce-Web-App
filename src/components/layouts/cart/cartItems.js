import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { COLORS } from '../../../constants/productConstant'
import { displayActionMessage } from '../popups/alert'
import Item from './item'

export default function CartItems() {
  
    const cart = useSelector(state => state.cart) 

    return (
        <div className='flex flex-1 flex-wrap justify-center  '>
            <div className='w-11/12 '>
                <div className='flex border-b-[1px] my-2 py-2'>
                    <span className='flex-1 text-right text-xl'>Cart Subtotal: ₹</span>
                    <span className='mr-3 text-2xl'>{cart.cartSubTotal}</span>
                    {
                    cart.cartItems.length>0 ?(
                        <Link to={'/order/order-summary'}><div className={`bg-[${COLORS.MAIN_THEME_COLOR}] cursor-pointer px-3 py-1 mx-4 text-xl`}>Order</div></Link>
                    ):(
                        <div className={`bg-[${COLORS.MAIN_THEME_COLOR}] cursor-pointer px-3 py-1 mx-4 text-xl`} onClick={()=>displayActionMessage("No item!","error")  }>Order</div>
                    )
                    }
                </div>
                <p className='text-xl text-center my-4'>Items in your cart</p>
                {cart.cartItems.length===0 ? (
                <div className='text-center mt-6 text-gray-500'>
                    There is no item in your cart.
                </div>):(<></>) }
                <div className='flex flex-wrap justify-center mb-4'>{
                    cart.cartItems.map(item => {
                        return (
                            <Item key={item._id}  item={item}></Item>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  )
}
