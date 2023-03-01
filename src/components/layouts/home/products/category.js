import React,{ useEffect, useState} from 'react'
import Card from './card'
import axios from 'axios'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'
import store from '../../../../store'
import { getAllProducts } from '../../../../Actions/productActions'


export default function Category(props) {
  // console.log({props})
  // let allProducts = useSelector(state => state.allProducts)
  // let products = allProducts[props.index]
  // console.log({allProducts})
  // const products = props.categoryProducts
  // const products = useSelector(state => state.allProducts)
  // console.log(products)
  // const [products, setProducts] = useState([]);
  
  // useEffect(()=>{
  //     store.dispatch(getAllProducts)

  //       const config = { headers: {"Content-Type": "application/json",}};

  //       axios.get(
  //         `http://localhost:5500/product/${props.title}`,
  //         config
  //       ).then(({data})=>{
  //         setProducts(data.products);
  //       })
    // },[])
    // const products = props.categoryProducts
  return (
    <div className='category border-green'>
        {props.title || 'title'}
       
        <div className='flex-box'>
           { 
             props.categoryProducts.map((product, i=0) =>{
              i++;
              if(i<=4)
               return (
                 // <Link to={`/product/${props.categoryProducts[0]._id}`}><Card product={props.categoryProducts[0]}/></Link>
               <Link key={product._id} to={`/product/details/${product._id}`}><Card product={product}/></Link>
             )})
          } 
        </div>
           <Link to={`/product/${props.title}`}>view more</Link>
    </div>
  )
}