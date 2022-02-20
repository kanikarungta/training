import axios from 'axios';
import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_ERROR } from './userTypes';

const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
};

const userRequestSuccess = users => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users
  }
};

const userRequestError = error => {
  return {
    type: FETCH_USER_ERROR,
    payload: error
  }
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      const users = response.data;
      dispatch(userRequestSuccess(users));
    })
    .catch( error => {
      const errorMsg= error.message;
      dispatch(userRequestError(errorMsg));
    })
  };
};
