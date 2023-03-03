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
    <div className='category pb-12'>
      <div className='flex justify-between py-2 px-6 mx-4'>
        <span className='text-2xl px-8'> {props.title.toUpperCase() || 'title'} </span>
          <Link to={`/product/${props.title}`} className="px-2 inline-block text-gray-600"><span>view more</span></Link>
      </div>
       
        <div className='flex justify-center'>
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
    </div>
  )
}