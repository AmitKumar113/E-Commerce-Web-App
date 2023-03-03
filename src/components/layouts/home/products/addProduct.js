import React from 'react'
import axios from 'axios'
import { CATEGORIES } from '../../../../constants/productConstant'

export default function addProduct() {
  const handleAddProduct = async (e)=>{
    e.preventDefault()
    // e.reset()
    const config = { headers: {"Content-Type": "application/json",
                     "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzc3YTlmOWIxOTg5MjViOGNmZDBiIn0sImlhdCI6MTY3NzY1OTEwMn0.KXRlJBrVNgqF9af5Rtu9qjPhhlkyBBD0Myz7pbX18nQ"         
                     }};

    const product = {
      name: document.querySelector('[name="product-name"]').value,
      description:  document.querySelector('[name="product-description"]').value,
      price:  document.querySelector('[name="product-price"]').value,
      category: document.querySelector('[name="product-category"]').value
    }

    const { data } =  await axios.post(
          `http://localhost:5500/addProduct`,
          product,
          config
        );

        e.target.reset();
        alert('product added successfully');
        // console.log(data.product)
  }

  return (<>
    <div className=' flex justify-center items-center'>
      <div className='login-container flex flex-col w-1/3 h-3/4 py-4 bg-slate-300 my-8 '>
        <span  className='text-center text-3xl py-8'>Add Product</span>
        <form className='flex-box-column [&>*]:w-2/3 [&>*]:h-12 [&>*]:my-1 [&>*]:px-6' onSubmit={handleAddProduct}>
        <input type="text" name="product-name" placeholder="Title of product"></input>
        <input type="number" name="product-price" placeholder="Selling Price"></input>
        {/* <label for="product-image">Product image</label>
        <input type="file" name="product-image"></input> */}
        {/* <label for="product-category"></label> */}
        <select name='product-category' className='w-1/2'>
                <option value="SELECT">SELECT</option>

            { CATEGORIES.map((category=>{
                return(
                    <option key={category} value={category}>{category}</option>
                )
            })) }
        </select>
        <textarea placeholder="Product Desription" name="product-description"></textarea>
        <button className='btn py-4 px-12 bg-green-600 my-8' type='submit'>Add Product</button>
      </form>
    </div>
  </div>
  </>
  )
}
