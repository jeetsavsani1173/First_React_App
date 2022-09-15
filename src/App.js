import React, { useState } from "react";
import "./App.css";
import Expense from "./Components/Expense/Expense";
import NewExpense from "./Components/NewExpense/NewExpense";

const dummy = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2022, 5, 12),
  },
];
function App() {
  const [expenses, setExpense] = useState(dummy);

  const addExpenseHandler = (newItem) => {
    // setExpense([...expenses, newItem]);
    setExpense((prevExpense) => {
      return [...prevExpense, newItem];
    });
  };
  return (
    <div>
      <h2>Let's Get Started!!</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
