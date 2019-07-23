import * as actionType from './actionTypes';
import axios from '../../axios-config';


export const regStart = ()=>{
  return {
    type: actionType.REG_START
  };
};

export const regSuccess = (data)=>{
  return {
    type: actionType.REG_SUCCESS,
    data: data
  };
};

export const DelaedRegSuccess = (data)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(regSuccess(data));
    }, 2000)
  };
};

export const regFail = (error)=>{
  return {
    type: actionType.REG_FAIL,
    error: error
  };
};

export const registration = (registrationData)=>{
  return dispatch=>{
    dispatch(regStart());
    const session = '/register';
    axios.post(session, registrationData)
      .then( response =>{
        dispatch(DelaedRegSuccess(response.data.message))
      })
      .catch(err=>{
        dispatch(regFail(err));
      });
  };
};
