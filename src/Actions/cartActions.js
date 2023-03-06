import axios from "axios";

export const addToCart = (productId) => async(dispatch) =>{
    console.log("addToCart")
    const config = { headers: {"Content-Type": "application/json"}};

    const { data } =  await axios.get(
          `http://localhost:5500/product/${productId}`,
          config
        );

        console.log(data.product)

        const item = {
            id : data.product._id,
            name : data.product.name,
            price : data.product.price,
            ratings : data.product.ratings,
            quantity : 1
        }
        
        const cartItems = JSON.parse(localStorage.getItem('cart-items')) || []
        cartItems.push(item);
        localStorage.setItem('cart-items', JSON.stringify(cartItems))

        dispatch({
            type: 'ADD_TO_CART',
            payload : cartItems
        })
}

export const updateQuantityOfItem = ({id, updatedQty}) => async(dispatch) =>{
    console.log("updateQuantityOfItem")
    console.log("product id :" +  id)

    const cartItems = JSON.parse(localStorage.getItem('cart-items')) || []
    cartItems.map( item => {
        if(item.id == id)
            item.quantity = updatedQty
    })
        
    localStorage.setItem('cart-items', JSON.stringify(cartItems))

        dispatch({
            type: 'UPDATE_QUANTITY',
            payload : cartItems
        })
}

export const removeItem = (id) => async(dispatch) =>{
    console.log("removeitem")
    console.log("product id :" +  id)

    const cartItems = JSON.parse(localStorage.getItem('cart-items')) || []
    let newCartItems = cartItems.filter( item => {
        if(item.id != id)
            return item
    })
        
    localStorage.setItem('cart-items', JSON.stringify(newCartItems))

        dispatch({
            type: 'DELETE_ITEM',
            payload : newCartItems
        })
}