import { combineReducers } from 'redux';
import iceCreamReducer from './icecreams/icecreamReducer';
import cakeReducer from './cakes/cakeReducer';
import userReducer from './users/userReducer';

const rootReducer = combineReducers({
  cake: cakeReducer,
  icecream: iceCreamReducer,
  user: userReducer
})

export default rootReducer;
