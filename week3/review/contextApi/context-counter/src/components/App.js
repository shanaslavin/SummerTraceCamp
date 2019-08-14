import React, { useState, useContext } from "react";
import CounterContext from "../context/CounterContext";
function App() {
    
  const counterContext = useContext(CounterContext);

  return(
    <div>
      <h1>Hello App</h1>
      <button onClick = { () => counterContext.setCounter((counter) => counter + 1) }> Increment </button>
      {counterContext.counter}
      <button onClick = { () => counterContext.setCounter(counter => counter - 1) }> Decrement </button>
    </div>
  )
}

export default App;