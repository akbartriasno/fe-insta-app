const ClientReducer = (state = {}, action) => {
  
    switch(action.type) {
        case 'update/user':
            return { ...state, user: action.user}
        
        case 'update/token':
            return { ...state, accessToken: action.accessToken}

        case 'clearState':
            return {undefined}

        default:
            return state
    }
}

  export default ClientReducer
  