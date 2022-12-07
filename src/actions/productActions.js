import axios from 'axios'

export const getProductsCategoryWise = async (category)=>{

    const config = { headers: { "Content-Type": "application/json" } };

        console.log(`${category}`)

      const { data } = await axios.get(
      `http://localhost:5500/product/${category}`,
      config
        )

    console.log(data.products)
    localStorage.setItem(`${category}`,JSON.stringify(data.products))
}

export const getProductOfCategory = async ()=>{

  const config = { headers: { "Content-Type": "application/json" } };
  const { data } = await axios.get(`http://localhost:5500/product/electronics`,config)

  console.log(data.products)

  return (dispatch)=>{
      dispatch({
          type : 'read',
          payload : data.products
      })
  }

}

// export const withdrawMoney = (amount) =>{
//   return (dispatch)=>{
//       dispatch({
//           type : 'withdraw',
//           payload : amount
//       })
//   }
// }