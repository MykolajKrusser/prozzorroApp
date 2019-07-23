import * as actionTypes from '../actions/actionTypes';

const initState = {
  email: '',
  password: '',
  token: null,
  error: null,
  loading: false,
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.AUTH_EMAIL:
      return{
        ...state,
        email: action.event.target.value
      }
    case actionTypes.AUTH_PASSWORD:
      return{
        ...state,
        password: action.event.target.value
      }
    case actionTypes.AUTH_START:
      return{
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.AUTH_SUCCESS:
      return{
        ...state,
        token: action.data,
        error: null,
        loading: false,
      }
    case actionTypes.AUTH_FAIL:
      return{
        error: action.error,
        loading: false
      }
    default: return state;
  }
};

export default reducer;