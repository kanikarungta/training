import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

// way 1
// const enhancers = compose( // to enable chrome redux developer tools
//   applyMiddleware(logger, thunk),
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//  );

// way 2
const enhancers = composeWithDevTools(
  applyMiddleware(logger, thunk),
  // other store enhancers if any
);

const store = createStore(rootReducer, enhancers);

export default store;
