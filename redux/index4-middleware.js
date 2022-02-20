const redux = require('redux');
const logger = require('redux-logger');

const BUY_PIZZA = 'BUY_PIZZA'; // actionType

const buyPizza = () => {
  return { type: BUY_PIZZA}
}; // action Creator

const initialState = { noOfPizzas : 10 }; // initialState

const reducer = (state = initialState, action) => {
  // reducer
  switch (action.type) {

    case BUY_PIZZA: {
      return { ...state, noOfPizzas: state.noOfPizzas - 1 };
    }
    default: return state;
  }
};

const store = redux.createStore(reducer, redux.applyMiddleware(logger.createLogger())); // store

const unsubscribe = store.subscribe(()=>{}); // returns the unsubscribe function to call later
store.dispatch(buyPizza());
// store.dispatch(buyPizza());
// store.dispatch(buyPizza());
unsubscribe();
