import React, { useEffect } from 'react'
import Category from './category'
import { CATEGORIES } from '../../../../constants/productConstant';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../component/Loader/Loader'
import { getProduct } from '../../../../Actions/productActions';
import cartPic from '../../../../images/cart-pic.jpg'

export default function Products() {
  const { allProducts, loading } = useSelector(state=>state.allProducts);

  const dispatch = useDispatch()

  return (
    <div className='flex justify-center'>

    {loading ? (<Loader/>):(
        
          <div className='w-4/5'>
             <div className={`w-full h-[50vh] flex items-center bg-[url(${cartPic})] bg-center bg-cover mb-2`} >
                <div className='flex flex-col ml-14'>
                  <span className='text-2xl w-fit my-2'>WELCOME!</span>
                  <span className='text-lg w-fit'>Shop from the comfort of your home.</span>
                  <span className='bg-black py-3 px-4 my-2 text-white w-fit cursor-pointer hover:bg-black/50'>SHOP NOW</span>
                </div>
             </div>
            <Category title = {CATEGORIES[0]} categoryProducts = {allProducts[0] || []}/>
            <Category title = {CATEGORIES[1]} categoryProducts = {allProducts[1] || []}/>
            <Category title = {CATEGORIES[2]} categoryProducts = {allProducts[2] || []}/>
            <Category title = {CATEGORIES[3]} categoryProducts = {allProducts[3] || []}/>
            <Category title = {CATEGORIES[4]} categoryProducts = {allProducts[4] || []}/>
          </div> 
          )}
    </div>
  )
}

/* { 
          CATEGORIES.map(category=>{
            i++;
          return (
            <Category key={category} title = {category} categoryProducts = {allProducts[i]}/>
       }) } */