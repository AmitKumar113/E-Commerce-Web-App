import { combineReducers } from 'redux'
import { allProductsReducer, productReducer } from './productReducers'
import { userReducer } from './userReducers'
import { cartReducer } from './cartReducers'
import { shopReducer } from './shopReducers'

const rootReducer = combineReducers({
    allProducts : allProductsReducer,
    product : productReducer,
    user : userReducer,
    cart : cartReducer,
    shop : shopReducer
})

export default rootReducer
