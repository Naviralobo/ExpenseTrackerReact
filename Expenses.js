import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.item.map((item) => (
        <ExpenseItem
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.locationOfExpenditure}
        ></ExpenseItem>
      ))}
    </Card>
  );
};

export default Expenses;
