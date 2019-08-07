import React from "react";
import moment from "moment";

const DatePicker = () => {

  const today = moment();
  console.log(today);

  return(
    <div>

      <label htmlFor="start">Start date:</label>

      <input 
        type="date" 
        id="start"
        value="2018-07-22"
        min="2018-01-01" 
        max="2018-12-31">
      </input>

    </div>
  )
}

export default DatePicker;