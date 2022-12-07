import { combineReducers } from "redux";
import productReducer from "./productReducers";

const reducers = combineReducers({
    items : productReducer
})

export default reducers