import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const authStart = ()=>{
  return {
    type: actionType.AUTH_START
  };
};

export const authSuccess = (token, user)=>{
  return {
    type: actionType.AUTH_SUCCESS,
    token: token,
    user: user
  };
};

export const DelaedAuthSuccess = (token, user)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(authSuccess(token, user));
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
        dispatch(DelaedAuthSuccess(response.data.token, response.data.user))
      })
      .catch(err=>{
        dispatch(authFail(err));
      });
  };
};
