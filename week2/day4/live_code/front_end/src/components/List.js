import React, { useState, useEffect } from 'react';
import { listKick } from "../apiService";
import { NavLink } from "react-router-dom";

function List() {

  const [kicks, setKicks] = useState([])

  useEffect(() => {
    listKick().then(response => {
      console.log(response.data)
      setKicks(response.data)
    })
  }, [])

  return(
    <div className="container">
      <h1 className="text-center">List</h1>
      <ul>
        {
          kicks.map((item) => 
            <NavLink key={item.id} to={`/detail/${item.id}`} >
             <li className="list-group-item"> {item.blurb} </li>
            </NavLink>
          )
        }
      </ul>
    </div>
  )
}

export default List;