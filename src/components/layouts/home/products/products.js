import React from 'react'
import Category from './category'
import { CATEGORIES } from '../../../../constants/productConstant';
import { useSelector } from 'react-redux';

export default function Products() {
  // let i=0;
  const allProducts = useSelector(state=>state.allProducts);
// console.log({allProducts})
// console.log(allProducts)
  return (
    <div>products
        {/* { 
          CATEGORIES.map(category=>{
            i++;
          return (
            <Category key={category} title = {category} categoryProducts = {allProducts[i]}/>
          ) }) } */}
          <Category index={0} title = {CATEGORIES[0]} categoryProducts = {allProducts[0] || []}/>
          <Category title = {CATEGORIES[1]} categoryProducts = {allProducts[1] || []}/>
          <Category title = {CATEGORIES[2]} categoryProducts = {allProducts[2] || []}/>
          <Category title = {CATEGORIES[3]} categoryProducts = {allProducts[3] || []}/>
          <Category title = {CATEGORIES[4]} categoryProducts = {allProducts[4] || []}/>
    </div>
  )
}
