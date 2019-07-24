import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const logoutStart = ()=>{
  return {
    type: actionType.LOGOUT_START
  };
};

export const logoutSuccess = (data)=>{
  return {
    type: actionType.LOGOUT_SUCCESS,
    data: data
  };
};

export const logoutFail = (error)=>{
  return {
    type: actionType.LOGOUT_FAIL,
    error: error
  };
};

export const logout = (token)=>{
  return dispatch=>{
    dispatch(logoutStart());
    const config = {
      headers: {Authorization: token}
    }
    const session = '/logout';
    axios.post(session, null, config)
      .then( response =>{
        dispatch(logoutSuccess(response))
      })
      .catch(err=>{
        dispatch(logoutFail(err));
      });
  };
};


