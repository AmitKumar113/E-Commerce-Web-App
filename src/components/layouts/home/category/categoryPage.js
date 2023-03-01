import React from 'react'
import Card from '../products/card'
import { useSelector } from 'react-redux/es/exports'
import { useParams } from 'react-router-dom'
import { CATEGORIES } from '../../../../constants/productConstant' 
import { Link } from 'react-router-dom'

export default function CategoryPage() {
    const { category } = useParams()
    let i=0
    for(i=0; i<CATEGORIES.length; i++){
        if(CATEGORIES[i]==category)
            break;
    }
    // CATEGORIES.map((categ)=>{
    //     if(CA)
    // })
    const allCategoryProducts = useSelector(state => state.allProducts[i])
    console.log(allCategoryProducts)
  
    return (
    <>
    <div>categoryPage</div>
    {
        allCategoryProducts.map(product =>  {
            return (
                // <Card product={product}/>
               <Link key={product._id} to={`/product/details/${product._id}`}><Card product={product}/></Link>
            )
        } )

    }
    </>
  )
}
