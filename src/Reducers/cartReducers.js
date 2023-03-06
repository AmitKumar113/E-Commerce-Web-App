export const cartReducer = (state = [], action)=>{
    switch(action.type){
        case 'ADD_TO_CART' : return action.payload;
        case 'UPDATE_QUANTITY' : return action.payload;
        case 'DELETE_ITEM' : return action.payload;
        default : return state;
    }
}