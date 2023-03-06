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
        let cartSubTotal = JSON.parse(localStorage.getItem('cart-subtotal')) || 0
        cartItems.push(item);
        cartSubTotal = cartSubTotal + data.product.price;
        localStorage.setItem('cart-items', JSON.stringify(cartItems))
        localStorage.setItem('cart-subtotal', JSON.stringify(cartSubTotal))

        dispatch({
            type: 'ADD_TO_CART',
            payload : {cartSubTotal, cartItems}
        })
}

export const updateQuantityOfItem = ({id, updatedQty}) => async(dispatch) =>{
    console.log("updateQuantityOfItem")
    console.log("product id :" +  id)

    const cartItems = JSON.parse(localStorage.getItem('cart-items')) || []
    let cartSubTotal = JSON.parse(localStorage.getItem('cart-subtotal')) || 0

    cartItems.map( item => {
        if(item.id == id){
            if(item.quantity < updatedQty){
                cartSubTotal = cartSubTotal + item.price
            }else  cartSubTotal = cartSubTotal - item.price
            item.quantity = updatedQty
        }
    })
        
    localStorage.setItem('cart-items', JSON.stringify(cartItems))
    localStorage.setItem('cart-subtotal', JSON.stringify(cartSubTotal))

        dispatch({
            type: 'UPDATE_QUANTITY',
            payload : {cartSubTotal, cartItems}
        })
}

export const removeItem = (id) => async(dispatch) =>{
    console.log("removeitem")
    console.log("product id :" +  id)

    let cartItems = JSON.parse(localStorage.getItem('cart-items')) || []
    let cartSubTotal = JSON.parse(localStorage.getItem('cart-subtotal')) || 0

    let newCartItems = cartItems.filter( item => {
        if(item.id != id)
            return item
            cartSubTotal = cartSubTotal - item.price * item.quantity
    })
        
    localStorage.setItem('cart-items', JSON.stringify(newCartItems))
    localStorage.setItem('cart-subtotal', JSON.stringify(cartSubTotal))
    cartItems = newCartItems

        dispatch({
            type: 'DELETE_ITEM',
            payload : {cartSubTotal, cartItems}
        })
}