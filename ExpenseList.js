import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found</h2>;
  }
  if (props.items.length === 1) {
    document.getElementsByClassName("card expenses").innerHTML =
      document.getElementsByClassName("card expenses").innerHTML +
      "Only one Expense found";
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => {
        return (
          <ExpenseItem
            key={item.id}
            title={item.title}
            amount={item.amount}
            date={item.date}
            location={item.locationOfExpenditure}
          ></ExpenseItem>
        );
      })}
    </ul>
  );
};

export default ExpenseList;
