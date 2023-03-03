import React from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addReview } from '../../../Actions/productActions'
import axios from 'axios'

export default function Reviews(props) {

  // const dispatch = useDispatch()
  // const reviews = props.reviews || []

  const HandleAddReview = async (e)=>{
    console.log("HandleAddReview function")
    console.log(props.id)
    e.preventDefault();
    const rating = document.querySelector('[name="rating"]').value;
    // const rating = 4
    const comment = document.querySelector('[name="comment"]').value;
    // const comment = "fabulour";

    const authToken =  localStorage.getItem('auth-token')
    console.log(authToken)
    try{

        const config = { headers: {"Content-Type": "application/json","auth-token": authToken}};
    
        const { data } =  await axios.post(
              `http://localhost:5500/product/${props.id}/addReview`,
              {rating, comment},
              config
            );
    
            
            console.log(data.product)
    }catch(error){
      console.log({error})
    }
    // dispatch(addReview({id, rating, comment}))
    // e.target.reset()
    }


  return (
    <>
        <span>write a review</span> 
    <form className='border-2 border-red-800 flex' onSubmit={HandleAddReview}>
        <select name='rating'>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <textarea name="comment" placeholder='write here'></textarea>
        <button type='submit' className='btn py-4 px-12 bg-green-600' 
        >
          Add Review</button>
    </form>
    <div>reviews</div>
    <div>
      {
        
       props.reviews.map( review => {
        return(<div key={review._id}>
          <div>{review.name}</div>
          <div>{review.comment}</div>
        </div>
        )
      }
      )}
    </div>
    </>
  )
}
