import React from "react";
import moment from "moment";

// what props shows
// const props = {
//   match: {},
//   location: {},
//   history= {}
// }

const DatePicker = ({ match, history }) => {
  
  const date = match.params.date;
  const today = moment().format("YYYY-MM-DD");
  const minDate = moment("1995-06-16").format("YYYY-MM-DD");

  const dateHandler = (event) => {
    const date = event.target.value;
    history.push(`/apods/${date}`);
  }

  return(
    <div>

      <label htmlFor="start">Start date:</label>

      <input
        onChange={dateHandler}
        type="date" 
        id="start"
        value={date}
        min={minDate}
        max={today}>
      </input>

    </div>
  )
}

export default DatePicker;