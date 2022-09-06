import React, { useState } from "react";

import "./ExpenseItem.css";
import Card from "../UI/Card.js";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";

const ExpenseItem = (props) => {
  const [amount, setAmount] = useState(props.amount);
  const clickHandler = () => {
    setAmount("$100");
  };
  const clickHandlerDelete = (event) => {
    document.getElementById(props.date).remove();
  };
  return (
    <Card id={props.date} className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        amount={amount}
        title={props.title}
        location={props.location}
      />
      <button onClick={clickHandler}>update Amount</button>
      <button onClick={clickHandlerDelete}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
