import axios from 'axios'

const initialState = {
    name : "Amit"

}

const productReducer = async (state={ initialState}, action) =>{
    if(action.type=='read'){

        console.log("action payload:"+action.payload)
        // state = data.products
        return { items : action.payload }

    }

    else   if(action.type=='withdraw')
        return state - action.payload

    else return state

}

export default productReducer