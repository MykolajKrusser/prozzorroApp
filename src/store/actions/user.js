import * as actionType from './actionTypes';
import axios from '../../axios-config';

export const userStart = ()=>{
  return {
    type: actionType.USER_START
  };
};

export const userSuccess = (data)=>{
  return {
    type: actionType.USER_SUCCESS,
    data: data
  };
};

export const DelaedUserSuccess = (data)=>{
  return dispatch => {
    setTimeout(()=>{
      dispatch(userSuccess(data));
    }, 2000)
  };
};

export const userFail = (error)=>{
  return {
    type: actionType.USER_FAIL,
    error: error
  };
};

export const userEdit = (userEditedData)=>{
  return dispatch=>{
    dispatch(userStart());
    const session = `/edit-user?name=${userEditedData.name}&surname=${userEditedData.surname}&name_customer=${userEditedData.name_customer}&role=${userEditedData.role}`;
    const config = {
      headers: {Authorization: userEditedData.token}
    }
    axios.post(session, null, config)
      .then( response =>{
        console.log(response.data)
        dispatch(DelaedUserSuccess(response.data))
      })
      .catch(err=>{
        dispatch(userFail(err));
      });
  };
};