import React from "react";
import Apod from "./Apod";
import DatePicker from "./DatePicker";
import { Route } from "react-router-dom";
import Apods from "./Apods";

const App = () => {
  
  return(
    <div>
      
      <Route path="/apods" exact component={Apods} />
      <Route path="/apods/:date" component={DatePicker} />
      <Route path="/apods/:date" component={Apod} />

    </div>
  )
}

export default App;