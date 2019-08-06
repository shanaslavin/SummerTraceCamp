import React, { useState } from "react";

// passing props

function Example( { name, people } ) {
  return (
    <h1>
      Good Morning {name} {people}
    </h1>
  )
}

export default Example;