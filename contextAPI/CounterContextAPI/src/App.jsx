//import React from "react";
import Counter from "./Components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";

const App = () => {
  const counterState = useContext(CounterContext);
  return (
    <div>
      <h1>Count is {counterState.count}</h1>
      <Counter />
      <Counter />
      <Counter />
      <Counter />
    </div>
  );
};

export default App;
