import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct, getSellerProducts } from "../../../../Actions/productActions";
import {  useNavigate, useParams, useSearchParams } from 'react-router-dom'
import Loader from "../Loader/Loader";
import { displayActionMessage } from "../../popups/alert";
import axios from 'axios'
import { getAllProducts } from "../../../../Actions/productActions";

export default function EditProduct() {
     const navigate = useNavigate()
    // const { id } = useSearchParams()
    const { id } = useParams()
    const { loading=true, product={} } = useSelector(state => state.product)
    
    const { user } = useSelector(state => state.user)
    const dispatch = useDispatch()

    // const [item, setItem] = useState(product)
    const [item, setItem] = useState({
      name : product.name,
      description : product.description,
      price: product.price,
      Stock:product.Stock
    })

    let { name, description, price, Stock }  = item;

    const handleChange = (e)=>{
        setItem({...item, [e.target.name]:e.target.value })
    }

    const handleSubmitChanges = async (e)=>{
      e.preventDefault()

      const authToken = localStorage.getItem('auth-token');
  
      const config = { headers: {
                      "Content-Type": "application/json",
                       "auth-token":  authToken     
                       }};
      
      const myForm = new FormData();
      myForm.append('name', name);
      myForm.append('description', description);
      myForm.append('price', price);
      myForm.append('Stock', Stock);
      // myForm.append('category', category);
      // myForm.append('file', image);
      // console.log({myForm})
      try{
          await axios.put(
          `http://localhost:5500/product/${id}/edit`,
            myForm,
            config
          );

          displayActionMessage("Changes Done", "success")
          navigate(`/product/details/${id}`)
        }catch(error){
           displayActionMessage("No Internet", "error")
          console.log({error})
      }

          dispatch(getAllProducts)
          dispatch(getSellerProducts(user._id))
          e.target.reset();
    }


    //❌ERROR : loading previous product value not able to update 'item' with product.
    useEffect(()=>{
        console.log({id})
        dispatch(getProduct(id))
        console.log({product})
        // if(loading)
        // console.log(loading)
        // setItem({
        //   name : product.name,
        //   description : product.description,
        //   price: product.price,
        //   Stock:product.Stock
        // })
    }, [id])

  return (
    <>
    {/* { console.log({product}) }
    { console.log({item}) } */}
    {/* { setItem(product) } */}
    { loading ? (<Loader/>):(
      <div className=" flex justify-center items-center">
        <div className="login-container flex flex-col w-1/3 py-4 bg-slate-300 my-8 ">
          <span className="text-center text-3xl py-8">Edit Product details</span>
          <form
            action="/addProduct"
            method="POST"
            enctype="multipart/form-data"
            className="flex-box-column [&>*]:w-2/3 [&>*]:h-12 [&>*]:my-1 [&>*]:px-6"
            onSubmit={handleSubmitChanges}
            // onChange={handleChange}
          >
            <input
              type="text"
              name="name"
              placeholder="Title of product"
              required
              value={name}
              onChange={handleChange}
            ></input>
            <input
              type="number"
              name="price"
              placeholder="Selling Price"
              required
              onChange={handleChange}
              value={price}
            ></input>
            <input
              type="number"
              name="Stock"
              placeholder="Stock"
              onChange={handleChange}
              required
              value={Stock}
            ></input>
            {/* <label for="product-image">Product image</label> */}
            {/* <input
              type="file"
              name="file"
              onChange={(e) => setImage(e.target.files[0])}
              required
            ></input> */}
            {/* <label for="product-category"></label> */}
            {/* <select name="product-category" className="w-1/2">
              <option value="SELECT">SELECT</option>

              {CATEGORIES.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select> */}
            <textarea
              placeholder="Product Desription"
              name="description"
              onChange={handleChange}
              required
              value={description}
            ></textarea>
            <button className="w-full h-full bg-green-600" type="submit">
               Submit Changes
            </button>
          </form>
        </div>
      </div>
      )}
    </>
  );
}
