import React, { useState } from "react";

// passing information with props

const ExampleContext = React.createContext();

function ExampleProvider(props) {
  const [num, setNum] = useState(7);
  
  return(
    <ExampleContext.Provider value={num}>
      {props.children}
    </ExampleContext.Provider>
  )
}

function One(props) {
  const myNum = React.useContext(ExampleContext);
  return(
    <div>
     <h1>{myNum}</h1>
    </div>
  )
}

function Two(props) {
  return(
    <div>
      <One/>
    </div>
  )
}

function Pass() {
  return(
    <div>
      <ExampleProvider>
        <Two />
      </ExampleProvider>
    </div>
  )
}

export default Pass;