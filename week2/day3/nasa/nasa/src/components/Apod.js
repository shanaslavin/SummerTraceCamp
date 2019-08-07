import React, { useState, useEffect } from "react";
import axios from "axios";

const API_KEY = "7ywfyjWGHRMiqDqmjTcxsrJMZkaeo0Z4RgftoNxw";

const Apod = ({ match }) => {

  const date = match.params.date;
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
    setLoading(true);
    axios.get(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=${API_KEY}`)
    .then((response) => {
    setData(response.data);
    setLoading(false);
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
      setError(true);
    })
  }, [date])

  if(loading) return(<div>Loading</div>);
  if(error) return(<div>Error!</div>)

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
