import { useState } from "react";
import "./ExpenseForm.scss";
interface IExpenseForm {
  onSaveExpenseData: any;
}
export const ExpenseForm = (props: IExpenseForm) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const { onSaveExpenseData } = props;
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event: any) => {
    setTitle(event.target.value);
    // setUserInput({ ...userInput, enteredTitle: event.target.value });
  };
  const amountChangeHandler = (event: any) => {
    setAmount(event.target.value);
  };
  const dateChangeHandler = (event: any) => {
    setDate(event.target.value);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();
    const enteredData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    setTitle("");
    setAmount("");
    setDate("");
    onSaveExpenseData(enteredData);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
