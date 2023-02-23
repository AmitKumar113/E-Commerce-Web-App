import React from 'react'
import Category from './category'
import { CATEGORIES } from '../../../../constants/productConstant';
// import { useSelector } from 'react-redux';

export default function products() {

  // const name = useSelector(state=>state.items );

  return (
    <div>products
        <Category title = 'electronics'/>
        <Category title = 'groceries'/>
        <Category title = 'furnitures'/>
        {/* // <Category title = { CATEGORIES[0] }/> */}
        {/* <Category/> */}
    </div>
  )
}
