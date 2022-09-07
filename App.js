import React, { useState } from "react";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const dummyExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
    locationOfExpenditure: "Uno Super Market",
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
    locationOfExpenditure: "Samsung Showroom",
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
    locationOfExpenditure: "Gpay",
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
    locationOfExpenditure: "Sanchu Furniture",
  },
];

const App = () => {
  const [expenses, setExpense] = useState(dummyExpenses);
  const addExpenseHandler = (expense) => {
    setExpense((prevExpense) => {
      return [expense, ...prevExpense];
    });
  };

  return (
    <div>
      <h2>Let's get started </h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
