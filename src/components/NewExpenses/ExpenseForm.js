import React from "react";
import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredtitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   enteredtitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });

  function titleChangeHandler(event) {
    setEnteredTitle(event.target.value);
    /*setUserInut({
      ...userInput, 
      enteredtitle: event.target.value
    }) 

     when ever code depends on previous state define afun inside setState

    setUserInput((previousState) => {
      return { ...previousState, enteredtitle: event.target.value };
    }); */
  }

  function amountChangeHandler(event) {
    setEnteredAmount(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  }

  function dateChangeHandler(event) {
    setEnteredDate(event.target.value);

    // setUserInput({ ...userInput, enteredDate: event.target.value });
  }

  const submitFormHandler = (event) => {
    event.preventDefault();
    const expData = {
      title: enteredtitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expData);
    props.onSaveExpense(expData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitFormHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input
            type="text"
            name="title"
            value={enteredtitle}
            onChange={titleChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="text"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
