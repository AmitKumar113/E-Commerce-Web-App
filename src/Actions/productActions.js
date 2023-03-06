import axios from 'axios'

export async function getAllProducts(dispatch){

    console.log('getAllProducts')
    const config = { headers: {"Content-Type": "application/json",}};

    const { data } =  await axios.get(
          `http://localhost:5500/all-products`,
          config
        );

        console.log(data.allProducts)

     dispatch({
        type : 'FETCH_ALL_PRODUCTS',
        payload : data.allProducts
     })   
}

//in use - ❌for the product details instead of making an api call, searched the allProduct state for that product
export const getProduct =(productId) => async (dispatch) => {
    const config = { headers: {"Content-Type": "application/json"}};

    const { data } =  await axios.get(
          `http://localhost:5500/product/${productId}`,
          config
        );

        console.log("data")
        console.log(data.product)

           dispatch({
              type : 'FETCH_PRODUCT',
              payload : data.product
           })   

   }

//not in use for now
export const addReview = ({productId, rating, comment}) => async(dispatch)=>{
   console.log("add review")
   const authToken =  localStorage.getItem('auth-token')
    const config = { headers: {"Content-Type": "application/json",
                     authtoken: authToken         
                     }};

    const { data } =  await axios.get(
          `http://localhost:5500/product/${productId}/addReview`,
           {rating, comment},
           config
        );

        console.log("data")
        console.log(data.product)

        return((dispatch)=>{
           dispatch({
              type : 'FETCH_PRODUCT',
              payload : data.product
           })   
        })
}
