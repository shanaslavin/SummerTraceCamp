import React, { useState } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";

function Home() {
  return(
    <h2>Home</h2>
  )
}

function About(){
  return(
    <h2>About</h2>
  )
}

function Contact(){
  return(
    <h2>Contact</h2>
  )
}

function main(){
  return(
    <BrowserRouter>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about" >About</Link>
          <Link to="/contact" >Contact</Link>
        </nav>
        
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>

    </BrowserRouter>
  )
}

export default main
