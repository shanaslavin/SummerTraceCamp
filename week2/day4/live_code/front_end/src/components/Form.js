import React, { useState } from "react";
import useForm from "../hooks/useForm.js";
import { createKick } from "../apiService";
import { Redirect } from 'react-router-dom'

function Form(props) {
  
  const { values, handleSubmit, handleChange } = useForm(
    {
      blurb: null,
      backers: 0,
      pledged: 0,
      created: ""
    },
    sendData
  );

  const [redirect, setRedirect] = useState(false);
  const [id, setId] = useState('');

  function sendData() {
    const payload = values;
    const created = new Date();
    payload["created"] = created.toISOString();
    createKick(payload).then(response => {
      setId(response.data.id);
      setRedirect(true);
    });
  }

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Blurb</label>
          <input
            type="text"
            className="form-control"
            name="blurb"
            value={values.blurb}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Backers</label>
          <input
            type="number"
            className="form-control"
            name="backers"
            value={values.backers}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Pledged</label>
          <input
            type="number"
            step="any"
            className="form-control"
            name="pledged"
            value={values.pledged}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="Submit" className="form-control" />
      </form>
      {redirect ? <Redirect to={`/detail/${id}`} /> : null}
    </React.Fragment>
  );
}

export default Form;