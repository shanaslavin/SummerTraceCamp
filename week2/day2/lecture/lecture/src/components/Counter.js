import React, { useState, useEffect } from "react";

function Counter(){
  const [number, setNumber] = useState(0);

  function addClick(){
    const addNumber = number + 1;
    setNumber(addNumber);
  }

  function subClick(){
    const subNumber = number - 1;
    setNumber(subNumber);
  }

  useEffect(() => {
    document.title = `${ number }`;
  })

  return(
    <div>
      <h1>{number}</h1>
      <button onClick={addClick}>Add One</button>
      <button onClick={subClick}>Subtracts One</button>
    </div>
  )
}

export default Counter;