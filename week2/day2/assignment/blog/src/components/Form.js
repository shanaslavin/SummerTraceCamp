import React, { useState } from "react";
import { BlogProvider } from "./BlogContext";

function Form(){
  const [BlogTitle, setBlogTitle] = useState('');
  const [BlogBody, setBlogBody] = useState('');
  const [value, setValue] = useState('');
  const [val, setVal] = useState('');
  const [blog, setBlog] = useState([])

  function changeTitle(event) {
    setValue(event.target.value);
  }

  function changeBody(event){
    setVal(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setBlogTitle(value);
    setBlogBody(val);
    setBlog([value, val]);
    setValue('');
    setVal('');
  }

  return(
    <div>
      <h1>{BlogTitle}</h1>
      <h2>{BlogBody}</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Blog Title" value={value} onChange={changeTitle} />
        <input type="textarea" placeholder="Blog Body" value={val} onChange={changeBody} />
        <input type="submit" />
      </form>
      <BlogProvider value={blog}></BlogProvider>
    </div>
  )
}

export default Form;