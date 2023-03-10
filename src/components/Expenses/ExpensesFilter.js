import React from "react";

import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  console.log(props)
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={filterChangeHandler}> 
        {/* value={props.selected} - default year value */}
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
