import React from "react";
import moment from "moment";

const Apods = ({ history, location}) => {

  const today = moment().format("YYYY-MM-DD");

  if(location.pathname === "/apods" || location.pathname === "/apods/") {
    history.replace(`/apods/${today}`);
  }

  return(
    <div>
      <h1>Hello World from APODS</h1>
    </div>
  )
}

export default Apods;