import React from 'react'
import Category from './category'
import { CATEGORIES } from '../../../../constants/productConstant';
// import { useSelector } from 'react-redux';

export default function products() {

  // const name = useSelector(state=>state.items );

  return (
    <div>products
        { CATEGORIES.map(category=>{
          return (
            <Category title = {category}/>
        ) }) }
    </div>
  )
}
