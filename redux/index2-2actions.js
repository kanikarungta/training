const redux = require('redux');

const BUY_PIZZA = 'BUY_PIZZA'; // actionType
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyPizza = () => {return { type: BUY_PIZZA}}; // action Creator
const buyIceCream = () => {return { type: BUY_ICECREAM}}; // action Creator

const initialState = { noOfPizzas : 10, noOfIcecream: 20}; // initialState

const reducer = (state = initialState, action) => { // reducer
  switch (action.type) {
    case BUY_PIZZA: return { ...state, noOfPizzas: state.noOfPizzas - 1 };
    case BUY_ICECREAM: return { ...state, noOfIcecream: state.noOfIcecream - 1 };
    default: return state;
  }
};

const store = redux.createStore(reducer); // store

const unsubscribe = store.subscribe(()=> console.log('new state', store.getState())); // returns the unsubscribe function to call later

console.log('initial state', store.getState());
store.dispatch(buyPizza());
console.log('initial state', initialState);
store.dispatch(buyPizza());
store.dispatch(buyPizza());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
