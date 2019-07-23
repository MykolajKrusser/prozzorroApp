import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const authStart = ()=>{
  return {
    type: actionType.AUTH_START
  };
};

export const authSuccess = (data)=>{
  return {
    type: actionType.AUTH_SUCCESS,
    data: data
  };
};

export const DelaedAuthSuccess = (data)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(authSuccess(data));
    }, 2000)
  };
};

export const authFail = (error)=>{
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password)=>{
  return dispatch=>{
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
    }
    const session = '/login';
    axios.post(session, authData)
      .then( response =>{
        dispatch(DelaedAuthSuccess(response.data.token))
      })
      .catch(err=>{
        dispatch(authFail(err));
      });
  };
};
