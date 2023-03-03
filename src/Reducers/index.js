import { combineReducers } from 'redux'
import { allProductsReducer, productReducer } from './productReducers'
import { userReducer } from './userReducers'

const rootReducer = combineReducers({
    allProducts : allProductsReducer,
    product : productReducer,
    user : userReducer
})

export default rootReducer
