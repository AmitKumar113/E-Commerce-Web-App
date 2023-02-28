import React from 'react'
import { CATEGORIES } from '../../../../constants/productConstant'

export default function addProduct() {
  return (<>
    <div>addProduct</div>
    <form className='add-product-form flex-box-column'>
        <input type="text" name="product-name" placeholder="Title of product"></input>
        <input type="number" name="product-price" placeholder="Selling Price"></input>
        {/* <label for="product-image">Product image</label>
        <input type="file" name="product-image"></input> */}
        {/* <label for="product-category"></label> */}
        <select name='product-category'>
                <option value="SELECT">SELECT</option>

            { CATEGORIES.map((category=>{
                return(
                    <option key={category} value={category}>{category}</option>
                )
            })) }
        </select>

        <textarea placeholder="Product Desription"></textarea>
        <button className='btn' type='submit'>Add Product</button>
    </form>
  </>
  )
}
