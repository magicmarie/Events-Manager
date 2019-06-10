const initState = {
    authError: null,
    authSuccess: null
  }
  
  const authReducer = (state = initState, action) => {
    switch(action.type){
      case 'POST_USER_SUCCESS':
        return {
          ...state,
          authSuccess: action.authSuccess
        };
  
      case 'POST_USER_ERROR':
        return {
          ...state,
          authError: action.error.message
        };

        case 'LOGIN_USER_SUCCESS':
          return {
            ...state,
            authSuccess: action.authSuccess
          };

      case 'LOGIN_USER_ERROR':
        return {
          ...state,
          authError: action.error.message
        };
  
      case 'SIGNOUT_SUCCESS':
        return {
          ...state,
          authSuccess: action.authSuccess
        };
  
      default:
        return state;
    }
  };
  
  export default authReducer;
