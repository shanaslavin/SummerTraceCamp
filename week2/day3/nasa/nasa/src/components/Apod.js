import React from "react";

const API_KEY = "7ywfyjWGHRMiqDqmjTcxsrJMZkaeo0Z4RgftoNxw";

const Apod = ({ match }) => {

  const date = match.params.date;

  return(
    <div>
      <h1>Hello World!</h1>
    </div>
  )
}

export default Apod;
