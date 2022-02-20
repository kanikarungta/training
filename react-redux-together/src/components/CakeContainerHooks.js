import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyCake } from '../redux';

function CakeContainerHooks () {
  const numberOfCakes = useSelector(state => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Hooks - Number of Cakes - {numberOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Hooks - Buy Cakes</button>
    </div>
  )
}

export default CakeContainerHooks;
