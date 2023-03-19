export const allProductsReducer = (state = [] , action)=>{
    switch(action.type){
        case 'FETCH_ALL_PRODUCTS' : 
        return {
            loading : false,
            allProducts : action.payload
        }
        case 'FETCH_ALL_PRODUCTS_REQUEST' : return {
            ...state,
            loading : true
        }
        default : return state;
    }
}

export const productReducer = (state = {}, action)=>{
    switch(action.type){
        case 'FETCH_PRODUCT' : return {
            loading : false,
            product : action.payload
        } 
        case 'FETCH_PRODUCT_REQUEST' : return {
            ...state,
            loading : true
        }

        default : return state;
    }
}