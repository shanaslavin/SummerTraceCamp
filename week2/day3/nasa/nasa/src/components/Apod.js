import React, { useState, useEffect } from "react";
import useNasa from "hooks/useNasa";

const API_KEY = "7ywfyjWGHRMiqDqmjTcxsrJMZkaeo0Z4RgftoNxw";

const Apod = ({ match }) => {

  const date = match.params.date;
  const { data, loading, error } = useNasa(date);

  if(loading) return(<div>Loading</div>);
  if(error) return(<div>Error!</div>);

  return(
    <div>
      <h2>{data.title}</h2>
      <em>{data.copyright}</em>
      <br></br>
      <img src={data.url} alt={data.title}/>
      <p>{data.explanation}</p>
    </div>
  )
}

export default Apod;
