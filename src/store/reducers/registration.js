import * as actionTypes from '../actions/actionTypes';

const initState = {
  name: '',
  surname: '',
  name_customer: '',
  email: '',
  phone: '',
  client_role: null,
  password: '',
  password_confirmation: '',
  error: null,
  loading: false,
  registarionResponse: null
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.REG_START:
      return{
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.REG_SUCCESS:
      return{
        ...state,
        registarionResponse: action.data,
        error: null,
        loading: false,
      }
    case actionTypes.REG_FAIL:
      return{
        error: action.error,
        loading: false
      }
    case actionTypes.REG_NAME:
      return{
        ...state,
        name: action.event.target.value
      }
    case actionTypes.REG_SURNAME:
      return{
        ...state,
        surname: action.event.target.value
      }
    case actionTypes.REG_NAME_CUSTOMER:
      return{
        ...state,
        name_customer: action.event.target.value
      }
    case actionTypes.REG_EMAIL:
      return{
        ...state,
        email: action.event.target.value
      }
    case actionTypes.REG_PHONE:
      return{
        ...state,
        phone: action.event.target.value
      }
    case actionTypes.REG_CLIENT_ROLE:
      return{
        ...state,
        client_role: Number(action.event.target.value)
      }
    case actionTypes.REG_PASSWORD:
      return{
        ...state,
        password: action.event.target.value
      }
    case actionTypes.REG_CONF_PASSWORD:
      return{
        ...state,
        password_confirmation: action.event.target.value
      }
    default: return state;
  }
};

export default reducer;