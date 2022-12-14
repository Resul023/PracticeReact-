import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { Expense } from "./components/Expenses/Expense";
import { NewExpense } from "./components/NewExpense/NewExpense";

function App() {
  const expense = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
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
      date: new Date(2021, 5, 12),
    },
  ];

  const addExpenseHandler = (expense: any) => {
    console.log("APP");
    console.log(expense);
  };
  return (
    <div className="App">
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expense expenses={expense} />
      </div>
    </div>
  );
}

export default App;
