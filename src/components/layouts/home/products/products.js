import React from 'react'
import Category from './category'
import { CATEGORIES } from '../../../../constants/productConstant';
import { useSelector } from 'react-redux';
// import image from '../../../../images/home-image-'
import Loader from '../../component/Loader/Loader'

export default function Products() {
  const { allProducts, loading } = useSelector(state=>state.allProducts);
// console.log({allProducts})
// console.log(allProducts)
  return (
    <div className='flex justify-center'>

    {loading ? (<Loader/>):(
        
        
          <div className='w-4/5'>
             <div className="w-full h-[50vh] bg-slate-400 bg-center bg-cover mb-2" >
                {/* <img src='../../../../images/home-image-small.jpg'></img> */}
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