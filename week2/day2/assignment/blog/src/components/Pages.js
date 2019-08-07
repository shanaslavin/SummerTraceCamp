import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Form from "./Form"
import List from "./List"

function Home() {
  return(
    <h1>Home</h1>
  )
}

function addBlog() {
  return(
    <div>
      <Form />
    </div>
  )
}

function listBlogs() {
  return(
    <div>
      <List />
    </div>
  )
}

function main(){
  return(
    <BrowserRouter>
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/addBlog">Add Posts</Link>
        <Link to="/listBlogs">List Posts</Link>
      </nav>

      <Route path="/" exact component={Home} />
      <Route path="/addBlog" component={addBlog} />
      <Route path="/listBlogs" component={listBlogs} />
    </div>
    </BrowserRouter>
  )
}

export default main;