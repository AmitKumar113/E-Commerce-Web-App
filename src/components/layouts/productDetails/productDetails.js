import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { getProduct } from '../../../Actions/productActions'
import { useDispatch, useSelector } from 'react-redux'
import { store } from '../../../store'
import { useParams } from 'react-router-dom'

const ProductDetails = () =>{
  
    const { id } = useParams()
    const [product, setProduct] = useState({});
    const allProducts = useSelector(state => state.allProducts)
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

        for(let i=0; i<allProducts.length; i++){
            for(let j=0; j<allProducts[i].length; j++){
                if(allProducts[i][j]._id == id){
                    setProduct(allProducts[i][j])
                    break;
                }
            }
        }

    },[])

    return (
        <>
    <div>productDetails</div>
        <h1>{product.name || "no name"}</h1>
        <h2>{product.description || "NO description"}</h2>
        </>

  )
}

export default ProductDetails