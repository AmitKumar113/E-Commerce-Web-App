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
    // const [product, setProduct] = useState({});
    // const allProducts = useSelector(state => state.allProducts)
                // const dispatch = useDispatch()

                // console.log("id" + id)
                // const dispatch = useDispatch()
                // console.log({product})
    
    useEffect(()=>{
        // setProduct(pro)
        // const getProductThunk = dispatch(getProduct)
        // dispatch(getProductThunk)
        // console.log({product})
        // store.dispatch(getProduct(id)) //dispatch is not defined & promise error 

        // for(let i=0; i<allProducts.length; i++){
        //     for(let j=0; j<allProducts[i].length; j++){
        //         if(allProducts[i][j]._id == id){
        //             setProduct(allProducts[i][j])
        //             break;
        //         }
        //     }
        // }

    },[])

    return (
        <div className='container border-black border-2 m-2 min-h-screen'>productDetails
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
                {console.log(product.reviews)}
                <Reviews id={id} reviews={product.reviews || []}/>
            </div>
        </div>

  )
}

export default ProductDetails