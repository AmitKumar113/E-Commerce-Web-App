export const allProductsReducer = (state = [] , action)=>{
    switch(action.type){
        case 'FETCH_ALL_PRODUCTS' : return action.payload;
        default : return state;
    }
}

export const productReducer = (state = {}, action)=>{
    switch(action.type){
        case 'FETCH_PRODUCT' : return action.payload;
        default : return state;
    }
}