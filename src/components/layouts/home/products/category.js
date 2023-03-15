import React,{ useEffect, useState} from 'react'
import Card from './card'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { getProduct } from '../../../../Actions/productActions'
import { COLORS } from '../../../../constants/productConstant'

export default function Category(props) {

  return (
    <div className='category pb-12'>
      <div className={`flex justify-between py-2 px-6 bg-[${COLORS.MAIN_THEME_COLOR}]`}>
        <span className='text-2xl px-8'> {props.title.toUpperCase() || 'title'} </span>
          <Link to={`/product/${props.title}`} className="px-2 inline-block text-gray-600"><span>view more</span></Link>
      </div>
       
        <div className='flex justify-center flex-wrap'>
           { 
             props.categoryProducts.map((product, i=0) =>{
                i++;
                if(i<=6)
                return (<div key={product._id} className='m-3'>
                  <Card product={product || {}}/>
               </div>
             )})
          } 
        </div>
    </div>
  )
}