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

//not in use - for the product details instead of making an api call, searched the allProduct state for that product
export const getProduct =()=>{
   
  return async function getProductThunk(dispatch){

   //  console.log('getAllProducts')
    const config = { headers: {"Content-Type": "application/json",
                     authtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzc3YTlmOWIxOTg5MjViOGNmZDBiIn0sImlhdCI6MTY3NzY1OTEwMn0.KXRlJBrVNgqF9af5Rtu9qjPhhlkyBBD0Myz7pbX18nQ"         
                     }};

    const { data } =  await axios.get(
          `http://localhost:5500/product/63f77a7af9b198925b8cfd18`,
         //  `http://localhost:5500/product/${productId}`,
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
}

// export async function addProduct(product){
//    const config = { headers: {"Content-Type": "application/json",
//                      authtoken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjNmNzc3YTlmOWIxOTg5MjViOGNmZDBiIn0sImlhdCI6MTY3NzY1OTEwMn0.KXRlJBrVNgqF9af5Rtu9qjPhhlkyBBD0Myz7pbX18nQ"         
//                      }};

//     const { data } =  await axios.get(
//           `http://localhost:5500/product`,
//           product,
//           config
//         );


//         console.log(data.product)
      
      
//       } 