import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"
import rootReducer from './Reducers/index'
// import { composeWithDevTools } from 'redux-devtools-extension'
// const composedEnhancer = composeWithDevTools(applyMiddleware(thunk))

export const store = createStore(rootReducer, applyMiddleware(thunk));
// export store