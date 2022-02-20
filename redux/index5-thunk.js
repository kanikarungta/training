const redux = require('redux');
const thunk = require('redux-thunk');
const axios = require('axios');

const initialState = { loading: false, data: [], error: '' };

const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_ERROR = 'FETCH_USERS_ERROR';

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST
  };
};

const fetchUsersSuccess = users => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users
  };
};

const fetchUsersError = error => {
  return {
    type: FETCH_USERS_ERROR,
    payload: error
  };
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_REQUEST: return { ...state, loading: true }
    case FETCH_USERS_SUCCESS: return { loading: false, data: action.payload, error: '' }
    case FETCH_USERS_ERROR: return { loading: false, data: [], error: action.payload }
  }
};

const getUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios.get('https://jsonplacehholder.typicode.com/users')
      .then( response => { 
        const users = response.data;
        // console.log(users)
        const usersId = response.data.map(user => user.id)
        // console.log(usersId)
        dispatch(fetchUsersSuccess(usersId))
      })
      .catch( error => {
        console.log(error.message)
        dispatch(fetchUsersError(error.message))
      })
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(thunk.default));

store.subscribe(() => console.log(store.getState()));

store.dispatch(getUsers());
// console.log(1234434343);
// store.dispatch(fetchUsersRequest());
