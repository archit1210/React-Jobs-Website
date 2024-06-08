//import React from "react";
//import Counter from "./Components/Counter";
import { useContext } from "react";
import { CounterContext } from "./context/Counter";
import Item from "./Components/Item";

const App = () => {
  //const counterState = useContext(CounterContext);

  return (
    <div>
      <Item name="MacBook Pro" price="10000" />
      <Item name="Pendrive" price="10" />
      <Item name="Monitor" price="2000" />
    </div>
  );
};

export default App;
