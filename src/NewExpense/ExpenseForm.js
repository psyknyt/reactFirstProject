import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");

  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  const ExpenseTitleHandler = (event) => {
    setTitle(event.target.value);
  };
  const ExpenseAmountHandler = (event) => {
    setAmount(event.target.value);
  };
  const ExpenseDateHandler = (event) => {
    setDate(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    {
      /*Two way binding add value property to your input tag*/
    }
    props.onSaveExpense(expenseData);
    setAmount("");
    setDate("");
    setTitle("");
  };

  const handleCancel =()=>{
    props.onCancel('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense-controls tit">
        <div className="new-expense-control">
          <label>Title:</label>
          <br />
          <input
            type="text"
            value={enteredTitle}
            onChange={ExpenseTitleHandler}
          />
        </div>
        <div className="new-expense-control amt">
          <label>Amount:</label>
          <br />
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={ExpenseAmountHandler}
          />
        </div>
        <div className="new-expense-control cal">
          <label>Date:</label>
          <br />
          <input
            className="date"
            value={enteredDate}
            onChange={ExpenseDateHandler}
            type="date"
            min="2019-01-01"
            max="2023-12-31"
          />
        </div>
      </div>
      <div className="new-expense_actions btn">
        <button onClick={handleCancel} className="exp-cancel">
          Cancel
        </button>
        <button type="submit" className="btn-add-expense">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
