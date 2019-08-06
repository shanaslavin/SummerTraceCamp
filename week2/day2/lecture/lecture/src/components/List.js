import React, { useState } from "react";

// using lists

function Number(props) {
  function handleClick(){
    props.remove(props.id)
  }
  return(
    <div>
      {props.num}
      <button onClick={handleClick}>Delete</button>
    </div>
  )
}

function List() {

  const [list, setList] = useState([1, 2]);
  const [value, setValue] = useState('');

  function handleChange(event) {
    setValue(event.target.value);
  }

  function addItem(event) {
    event.preventDefault();
    setList([...list, value]);
    setValue("");
  }

  function handleRemove(id) {
    const newList = list.filter((item, index) => index != id);
    setList(newList);
  }

  return (
    <div>
      <h1>A list</h1>
      <ul>
        {list.map((item, index) => (
          <li key={index} ><Number num={item} remove={handleRemove} id={index} /></li>
        ))}
      </ul>

      <form onSubmit={addItem}>
        <input type="text"  value={value} placeholder="input" onChange={handleChange}/>
        <input type="submit" />
      </form>
    </div>
    
  )
}

export default List;