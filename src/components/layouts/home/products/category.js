import React,{ useEffect, useState} from 'react'
import Card from './card'
import axios from 'axios'

let pros;
export default function Category(props) {

  const [products, setProducts] = useState([]);

  useEffect(()=>{
        const config = { headers: {"Content-Type": "application/json",}};

        axios.get(
          `http://localhost:5500/product/${props.title}`,
          config
        ).then(({data})=>{
          setProducts(data.products);
        })
    },[])

  return (
    <div className='category border-green'>
        {props.title || 'title'}
       
        <div className='flex-box'>
           { products.map(product =>{
                return (
                   <Card key={product._id} name={product.name} description={product.description}/>
                )})}

            {/* <Card name="Oneplus 1" description="oneplus Description 1"/> */}
            {/* <Card name={pros[0].name} description="oneplus Description 1"/> */}
            {/* <Card name={products[1].name || "not loaded"} description={products[1].description || "loading"}/> */}
            {/* <Card /> */}
        </div>
    </div>
  )
}