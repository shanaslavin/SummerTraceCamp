import React, { useState } from "react";
import { BlogConsumer } from "./BlogContext"

function List() {
  return(
    <BlogConsumer>
      {props =>{
        return(
          <div>{props.BlogTitle}</div>
        )
      }}
    </BlogConsumer>
  )
}

export default List;