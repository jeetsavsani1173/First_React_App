import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
// import expenseDate from "./ExpenseDate";

function Expense(props) {
  const [filteredYear, setFilteredYear] = useState("404");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  let filteredExpenses;
  if (filteredYear !== "404") {
    filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  } else {
    filteredExpenses = props.items.filter((expense) => {
      return true;
    });
  }

  let expenseContent = <p>No Expense Found Here..</p>;

  if (filteredExpenses.length > 0) {
    expenseContent = filteredExpenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />

      {/* dynamic rendring */}
      {expenseContent}

      {/* static rendering */}
      {/* <ExpenseItem
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        amount={props.items[3].amount}
        date={props.items[3].date}
      /> */}
    </Card>
  );
}

export default Expense;
