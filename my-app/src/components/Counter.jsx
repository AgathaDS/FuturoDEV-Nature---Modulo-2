// src/components/Counter.js
import React from 'react';
import { useCounter } from '../context/CounterContext';

const Counter = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <div>
      <h1>Contador: {state.count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
