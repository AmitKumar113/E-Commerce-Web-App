import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getProduct } from '../../../Actions/productActions'
import ReviewCard from './reviewCard'

export default function Reviews(props) {

  const product = useSelector(state => state.product)
  const reviews = product.reviews || []
  const dispatch = useDispatch()

  const HandleAddReview = async (e)=>{
    e.preventDefault();
    const rating = document.querySelector('[name="rating"]').value;
    const comment = document.querySelector('[name="comment"]').value;

    const authToken =  localStorage.getItem('auth-token')
    try{

        const config = { headers: {"Content-Type": "application/json","auth-token": authToken}};
    
        const { data } =  await axios.post(
              `http://localhost:5500/product/${props.id}/addReview`,
              {rating, comment},
              config
            );
    
            
            console.log(data.product)
            e.target.reset()
            dispatch(getProduct(props.id))
    }catch(error){
      console.log({error})
    }
    }


  return (
    <>
        <span className='text-2xl'>write a review</span> 
    <form className='border-2 border-red-800 flex h-20 mb-4 [&>*]:h-4/5 items-center' onSubmit={HandleAddReview}>
        <select name='rating' className='w-12 text-xl text-center ml-4' defaultValue='5'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <textarea required name="comment" placeholder='write here' className='items-center flex-1 mx-2 border-2 border-gray-700'></textarea>
        <button type='submit' className='py-4 px-10 mr-4 bg-green-600'>Add Review</button>
    </form>
    <div>Reviews</div>
    <div>
      {
        
       reviews.map( review => {
        return( <ReviewCard review={review}></ReviewCard>)
      }
      )}
    </div>
    </>
  )
}
