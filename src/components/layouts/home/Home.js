import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { getProduct } from '../../../Actions/productActions'
import Products from './products/products'
import Loader from '../component/Loader/Loader'

export default function Home() {

  return (
      <div>
      <Products/>
      </div>
  )
}


