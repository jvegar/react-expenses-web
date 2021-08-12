import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm() {
  const [enteredTitle, setEnterededTitle] = useState("");
  const [enteredDate, setEnterededDate] = useState("");
  const [enteredAmount, setEnterededAmount] = useState("");

  const titleChangeHandler = (e) => {
    setEnterededTitle(e.target.value);
    console.log(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnterededDate(e.target.value);
    console.log(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnterededAmount(e.target.value);
    console.log(e.target.value);
  };

  const submitHandler = (e) =>{
    e.preventDefault();
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
    }
    console.log(expenseData);
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle}></input>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-01-01" onChange={dateChangeHandler} value={enteredDate}></input>
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" step="0.1" onChange={amountChangeHandler} value={enteredAmount}></input>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
