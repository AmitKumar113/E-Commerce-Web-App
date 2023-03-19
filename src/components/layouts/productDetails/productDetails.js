import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getProduct } from '../../../Actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../store'
import { useParams } from 'react-router-dom'
import Reviews from './reviews'
import { COLORS } from '../../../constants/productConstant'
import { addToCart } from '../../../Actions/cartActions'
import ReactStars from "react-rating-stars-component";
import { displayActionMessage } from '../popups/alert'
import Loader from '../../layouts/component/Loader/Loader'


const ProductDetails = () =>{
    // const loading = true;
    const { id } = useParams()
    const { product, loading  } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const options = {
        edit: false, // false: readonly
        color: "rgba(20,20,20,0.1)",
        activeColor: "tomato",
        size: window.innerWidth < 600 ? 20 : 25,
        value: 5,
        isHalf: true, //true: half star
    }

    const HandleAddToCart = () => {
          dispatch(addToCart(product._id))
          displayActionMessage("item added to cart", "success")
      }
    
    useEffect(()=>{
        dispatch(getProduct(id))
    },[])

    return (
        <div>
        { loading ?  ( <Loader/> ):(
        <div className='flex justify-center border-green  border-2'>
            <div className='w-4/5'>
            <div className='details-conatiner border-[1px] border-black flex m-5 p-3 justify-center min-h-2/3'>
                {/* ❌ ERROR : when state is not initialised cant accesss image url thats gives error 
                    solution  - need to initialise the product on starting or even better implement loading*/}
                {
                product.Stock ? (
                    <div className={`bg-[url(${product.image.url})] bg-cover bg-center border-[1px] w-1/3 h-80`}></div>
                    ):(
                        <div className={` bg-cover bg-center border-[1px] w-1/3 h-80`}></div>
                )
                }
                
                <div className='flex flex-col border-[1px] border-black w-2/5 p-3'>
                    <div className=' flex mb-2'>
                        <span className='text-2xl flex-1'>{product.name || "no name"}</span>
                    </div>
                    <p className='flex-1'>{product.description || "NO description"}</p>
                    { product.Stock >= 1 ? 
                        (<span className='border-[1px] w-fit rounded-xl px-4 border-green-700 text-green-700 bg-gray-200/50'>Available</span>):
                        (<span className='border-[1px] w-fit rounded-xl px-4 border-orange-700 text-orange-700 bg-gray-200/50'>out of stock</span>)
                    }
                    <div className='flex mb-4'>
                        <p className='text-3xl flex-1 my-3'>₹{product.price || "NO description"}</p>
                        <div className='flex flex-col'>  
                        { product.ratings == 0 ? ( <span className=''> No reviews</span>):(
                            <>
                            <span className=''><ReactStars {...options} /></span>
                            <span className=''> {product.numOfReviews} reviews</span>
                            </>
                        )}
                        </div>
                    </div>
                    <div>
                        <div className=' flex [&>*]:text-center [&>*]:cursor-pointer'>
                            <div className='w-1/2 mx-2 py-1.5' onClick={()=>{HandleAddToCart()}}>Add to cart</div>
                            <div className={`w-1/2 mx-2 py-1.5 rounded-lg bg-[${COLORS.MAIN_THEME_COLOR}]`}>Buy Now</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='review-container px-4'>
                <Reviews id={id} reviews={product.reviews || []}/>
            </div>
        </div>
        </div>
    )}
    </div>
  )
}

export default ProductDetails