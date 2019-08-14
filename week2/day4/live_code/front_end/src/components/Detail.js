import React, { useState, useEffect } from 'react';
import { getKick } from "../apiService";

function Detail(props) {

  const [kick, setKick] = useState({});

  useEffect(() => {
    const id = props.match.params.id;
    getKick(id).then(response => {
      setKick(response.data);
    })
  }, [])

  return(
    <div className="container">
      <h1 className="text-center">Detail</h1>
      <h2>Blurb: {kick.blurb}</h2>
      <h3>Backers: {kick.backers}</h3>
      <h3>Pledged: {kick.pledged}</h3>
    </div>
  )
}

export default Detail;