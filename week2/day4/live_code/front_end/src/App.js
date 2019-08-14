import React from 'react';
import { BrowserRouter as Router, NavLink, Route } from "react-router-dom";
import Home from "./components/Home";
import Create from "./components/Create";
import List from "./components/List";
import Update from "./components/Update";
import Detail from "./components/Detail";


function App() {
  return (
    <div className="App">

      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <NavLink to="/" className="nav-item navLink">Home</NavLink>
          <NavLink to="/create/" className="nav-item navLink">Create</NavLink>
          <NavLink to="/list/" className="nav-item navLink">List</NavLink>
        </nav>

        <Route path="/" exact component={Home} />
        <Route path="/create/" exact component={Create} />
        <Route path="/list/" exact component={List} />
        <Route path="/detail/:id" exact component={Detail} />
        <Route path="/update/:id" exact component={Update} />
      </Router>
      
    </div>
  );
}

export default App;
