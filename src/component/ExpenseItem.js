import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";

const ExpenseItem = (props) => {
  return (
    <li key={props.index} className="expense">
      <ExpenseDate date={props.date} />
      <div className="expense-title">{props.title}</div>
      <p className="expense-amount">${props.amount}</p>
    </li>
  );
};

export default ExpenseItem;
