import React from "react";
import "./ExpenseDetails.css";

const ExpenseDetails = (props) => {
  return (
    <div className="expense-item__description">
      <h2>{props.title}</h2>
      <h3>{props.location}</h3>
      <div className="expense-item-amount">{props.amount}</div>
      {/* {<button onClick={() => console.log("Hi")}>button</button> */}
    </div>
  );
};

export default ExpenseDetails;
