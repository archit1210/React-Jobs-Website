// eslint-disable-next-line no-unused-vars
import React, { Component, useContext } from "react";
import { CounterContext } from "../context/Counter";
import "./Counter.css";

const Counter = () => {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      <button
        onClick={() => counterContext.setCount(counterContext.count + 1)}
        className="Increment-button"
      >
        Increment
      </button>
      <button
        onClick={() => counterContext.setCount(counterContext.count - 1)}
        className="Decrement-button"
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
