import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const logoutStart = ()=>{
  return {
    type: actionType.AUTH_START
  };
};

export const logoutSuccess = (data)=>{
  return {
    type: actionType.AUTH_SUCCESS,
    data: data
  };
};

export const DelaedLogoutSuccess = (data)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(logoutSuccess(data));
    }, 2000)
  };
};

export const logoutFail = (error)=>{
  return {
    type: actionType.AUTH_FAIL,
    error: error
  };
};

export const logout = (token)=>{
  return dispatch=>{
    dispatch(logoutStart());
    const logoutData = {
      Authorization: token
    }
    const session = '/logout';
    axios.post(session, logoutData)
      .then( response =>{
        dispatch(DelaedLogoutSuccess(response))
      })
      .catch(err=>{
        dispatch(logoutFail(err));
      });
  };
};


