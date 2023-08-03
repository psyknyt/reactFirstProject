import React, { useState } from "react";
import Expense from "./component/ExpenseItem";
import Card from "./component/Card";
import NewExpense from "./NewExpense/NewExpense";
import ExpenseFilter from "./NewExpense/ExpenseFilter";
import ExpenseChart  from "./NewExpense/ExpensesChart";
const DUMMY_EXPENSES = [
  {
    title: "Car Insurance",
    amount: "299.99",
    date: new Date(2021, 3, 28),
  },
  {
    title: "Health Insurance",
    amount: "459",
    date: new Date(2020, 2, 12),
  },
  {
    title: "Books",
    amount: "123",
    date: new Date(2019, 4, 21),
  },
  {
    title: "College Fee",
    amount: "4000",
    date: new Date(2022, 4, 4),
  },
];
function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const [filteredYear, setFilteredYear] = useState("2020");

  const addNewHandler = (expenseData) => {
    setExpense((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };

  // const [filterInfoText, setFilterInfoText] = useState("2019, 2021 & 2022");
  const changeSelectHandler = (year) => {
    setFilteredYear(year);

    //  the below example is for derived states
    //  if(year==='2019'){
    //   setFilterInfoText('2020, 2021 & 2022');
    //  }
    //  else if(year==='2020'){
    //   setFilterInfoText('2019, 2021 & 2022');
    //  }
    //  else if(year==='2021'){
    //   setFilterInfoText('2019, 2020 & 2022');
    //  }
    //  else{
    //   setFilterInfoText('2019, 2020 & 2021');
    //  }
  };
  const filteredExpenses = expense.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  // console.log(filteredYear);
  // console.log(filteredExpenses);

  let expenseContent = (
    <p className="broke">No expense found, I think you are brokee!!🥲</p>
  );

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense, index) => (
      <Expense
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
        key={index}
      />
    ));
  }
  return (
    <div>
      <NewExpense onAddingNew={addNewHandler} />
      <Card>
        <ExpenseFilter
          selected={filteredYear}
          onChangeSelect={changeSelectHandler}
        />
        <ExpenseChart expenses={filteredExpenses}/>
        {/* <p className="expenseFilterInfo">
          Data for years {filterInfoText} is hidden.
        </p> */}

        {expenseContent}
      </Card>
    </div>
  );
}

export default App;
