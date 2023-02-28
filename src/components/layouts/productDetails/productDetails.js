import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProductDetails = ( {match} ) =>{
  
    console.log("match : " + match)
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        const config = { headers: {"Content-Type": "application/json",}};

        axios.get(
          `http://localhost:5500/${match.params.id}`,
          config
        ).then(({data})=>{
            console.log({data})
            setProduct(data.product);
        })
    },[])

    return (
        <>
    <div>productDetails</div>
        <h1>{product.name}</h1>
        <h2>{product.description}</h2>
        </>

  )
}

export default ProductDetails