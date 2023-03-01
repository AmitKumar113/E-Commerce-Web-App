import { combineReducers } from 'redux'
import { allProductsReducer, productReducer } from './productReducers'

const rootReducer = combineReducers({
    allProducts : allProductsReducer,
    product : productReducer
})

export default rootReducer
