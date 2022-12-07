import axios from 'axios'

const productReducer = async (state={ items : []}, action) =>{
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