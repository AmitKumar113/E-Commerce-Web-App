import React,{ useEffect, useState} from 'react'
import Card from './card'
import axios from 'axios'
import { Link } from "react-router-dom"

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
                   <Link key={product._id} to={`/product/${product._id}`}><Card product={product}/></Link>
                )})}
        </div>
    </div>
  )
}