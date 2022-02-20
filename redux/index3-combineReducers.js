const redux = require('redux');

const BUY_PIZZA = 'BUY_PIZZA'; // actionType
const BUY_ICECREAM = 'BUY_ICECREAM';

const buyPizza = () => {return { type: BUY_PIZZA}}; // action Creator
const buyIceCream = () => {return { type: BUY_ICECREAM}}; // action Creator

const initialPizzaState = { noOfPizzas : 10 }; // initialState
const initialIcecreamState = { noOfIcecream: 20 }; // initialState
// const state1 = { noOfPizzas : 10, noOfIcecream: 20 }
const pizzaReducer = (state = initialPizzaState, action) => { // reducer
  switch (action.type) {
    case BUY_PIZZA: return { ...state, noOfPizzas: state.noOfPizzas - 1 };
    default: return state;
  }
};

const icecreamReducer = (state = initialIcecreamState, action) => { // reducer
  switch (action.type) {
    // case BUY_PIZZA: return { ...state, noOfPizzas: 'kyu btau' }; // creates new key perform action whatever is you have given
    case BUY_ICECREAM: return { ...state, noOfIcecream: state.noOfIcecream - 1 };
    default: return state;
  }
};

const rootReducer = redux.combineReducers({
  icecream: icecreamReducer,
  pizza: pizzaReducer
});

const store = redux.createStore(rootReducer); // store

const unsubscribe = store.subscribe(()=> console.log('new state', store.getState())); // returns the unsubscribe function to call later

console.log('initial state', store.getState());
store.dispatch(buyPizza());
store.dispatch(buyPizza());
store.dispatch(buyPizza());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
