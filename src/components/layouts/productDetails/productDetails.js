import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getProduct } from '../../../Actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../store'
import { useParams } from 'react-router-dom'
import Reviews from './reviews'

const ProductDetails = () =>{
  
    const { id } = useParams()
    const product = useSelector(state => state.product)
    const dispatch = useDispatch()
    // const [product, setProduct] = useState({});
    // const allProducts = useSelector(state => state.allProducts)
                // const dispatch = useDispatch()

                // console.log("id" + id)
                // const dispatch = useDispatch()
                // console.log({product})
    
    useEffect(()=>{
        dispatch(getProduct(id))

    },[])

    return (
        <div className='flex justify-center border-green  border-2'>
            <div className='w-4/5'>
            <div className='details-conatiner border-2 border-black flex m-5 p-3 justify-center min-h-1/3'>
                <div className='image border-red-300 border-2 w-1/3 h-60'>
                    image
                </div>
                <div className='details border-2 border-black w-2/5 p-3'>
                    <p className='text-2xl'>{product.name || "no name"}</p>
                    <p>{product.description || "NO description"}</p>
                    <p className='text-3xl'>${product.price || "NO description"}</p>
                </div>
            </div>
            <div className='review-container'>
                <Reviews id={id} reviews={product.reviews || []}/>
            </div>
        </div>
        </div>

  )
}

export default ProductDetails