import { useState } from "react";
import { Card } from "../UI/Card";
import { ExpenseDate } from "./ExpenseDate";
import "./ExpenseItem.scss";
interface IExpenseItemProps {
  date: Date;
  title: string;
  amount: number;
}
export const ExpenseItem = (props: IExpenseItemProps) => {
  const { date, title, amount } = props;
  const [currentTitle, setTitle] = useState(title);
  const clickHandler = () => {
    setTitle("Dilqem");
    console.log(currentTitle);
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{currentTitle}</h2>
        <div className="expense-item__price">${amount}</div>
        <button onClick={clickHandler}>Hello</button>
      </div>
    </Card>
  );
};
