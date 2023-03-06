import { combineReducers } from 'redux'
import { allProductsReducer, productReducer } from './productReducers'
import { userReducer } from './userReducers'
import { cartReducer } from './cartReducers'

const rootReducer = combineReducers({
    allProducts : allProductsReducer,
    product : productReducer,
    user : userReducer,
    cart : cartReducer
})

export default rootReducer
