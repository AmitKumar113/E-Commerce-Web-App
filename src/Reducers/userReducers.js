export const userReducer = (state = { user :{} } , action)=>{
    switch(action.type){
        case 'SET_USER' : 
        return {
            isAuthenticated : true,
            user :  action.payload
        }
        case 'LOGOUT_USER' : 
        return {
            isAuthenticated : false,
            user : {}
        };
        case 'LOGIN_FAIL' : 
        return {
            isAuthenticated : false,
            error : action.payload,
            user : {}
        }
        case 'CLEAR_ERRORS' : 
        return {
            ...state,
            error : null
        }
        
        default : return state;
    }
}