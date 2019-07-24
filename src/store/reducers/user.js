import * as actionTypes from '../actions/actionTypes';

const initState = {
  name: '',
  surname: '',
  name_customer: '',
  role: null,
  error: null,
  loading: false,
  editMode: false,
}

const reducer = (state=initState, action)=>{
  switch(action.type){
    case actionTypes.USER_NAME:
      return{
        ...state,
        name: action.event.target.value
      }
    case actionTypes.USER_SURNAME:
      return{
        ...state,
        surname: action.event.target.value
      }
    case actionTypes.USER_NAME_CUSTOMER:
      return{
        ...state,
        name_customer: action.event.target.value
      }
    case actionTypes.USER_CLIENT_ROLE:
      return{
        ...state,
        role: Number(action.event.target.value)
      }
    case actionTypes.USER_START:
      return{
        ...state,
        error: null,
        loading: true
      }
    case actionTypes.USER_SUCCESS:
        let edit;
        state.editMode ? edit = false : edit = true;
      return{
        ...state,
        error: null,
        editMode: edit,
        loading: false,
      }
    case actionTypes.USER_EDIT_MOD:
        let editMod;
        state.editMode ? editMod = false : editMod = true;
        return{
          ...state,
          error: null,
          editMode: editMod,
          loading: false,
        }
    case actionTypes.USER_FAIL:
      return{
        error: action.error,
        loading: false
      }
    default: return state;
  }
};

export default reducer;