import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import rootReducer from './Reducers/index'
import { composeWithDevTools } from 'redux-devtools-extension'
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

const initialState = {
    cart : JSON.parse(localStorage.getItem('cart-items')) || []
}

export const store = createStore(rootReducer, initialState,composedEnhancer);
// export store