import "./Expense.scss";

import { IExpenseItem } from "../../models/ExpenseItem";
import { Card } from "../UI/Card";
import { ExpenseItem } from "./ExpenseItem";
import { ExpenseFilter } from "./ExpenseFilter";
import { useState } from "react";
interface IExpenseProps {
  expenses: IExpenseItem[];
}
export const Expense = (props: IExpenseProps) => {
  const { expenses } = props;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear: any) => {
    setFilteredYear(selectedYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
    </Card>
  );
};
