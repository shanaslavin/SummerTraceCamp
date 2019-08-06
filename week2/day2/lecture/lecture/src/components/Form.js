import React, { useState } from "react";

//using forms

function Form(props){

  const [name, setName] = useState("John Wick");
  const [status, setStatus] = useState("Where is my dog??");
  const [value, setValue] = useState(' ');

  function changeValue(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    setStatus(value);
    setValue("");
    event.preventDefault();
  }

  return(
    <div>
      <h1>{props.name}</h1>
      <h2>{status}</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Add Name" value={name}/>
        <input type="text" placeholder="Change Status" value={value} onChange={changeValue}/>
        <input type="submit" />
      </form>
    </div>
  )
}

export default Form;