import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import React, { useState } from "react";

const NewExpense = (props) => {
  const [isAdding, setAdd] = useState(false);
  const handleAddClick = () => {
    setAdd(true);
  };
  const saveExpenseHandler = (Data) => {
    const expenseData = {
      ...Data,
      id: Math.random() * 1,
    };
    props.onAddingNew(expenseData);
  };
  const handleCancel=()=>{
setAdd(false);
  };
  let content;
  if (isAdding) {
    content = <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={handleCancel} />;
  } else {
    content = (
      <button onClick={handleAddClick}  className="expense-New-add">
        Add New Expense
      </button>
    );
  }
  return (
  <div className="new-expense">
    {content}
  </div>
  );
};
export default NewExpense;
