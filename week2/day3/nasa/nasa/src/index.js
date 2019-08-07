import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

// Example paths
// const absolutePath = "/Users/shanaslavin/Desktop"
// const relativePath = "./components/App"
// const projectPath = "./components/App"

const root = (
  <Router>
    <App />
  </Router>

)

ReactDOM.render(root, document.getElementById('root'));