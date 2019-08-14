import React, { useState, createContext } from "react";

const CounterContext = createContext();

export default CounterContext;

export const CounterProvider = (props) => {

  const [counter, setCounter] = useState(0);
  const value = {
    counter,
    setCounter,
  }
  
  return(
    <CounterContext.Provider value = {value}>
      {props.children}
    </CounterContext.Provider>
  )
}