import { ExpenseForm } from "./ExpenseForm";
import "./NewExpense.scss";

export const NewExpense = (props: any) => {
  const { onAddExpense } = props;
  const saveExpenseDataHandler = (enteredExpenseData: object) => {
    const expenrence = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    onAddExpense(expenrence);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};
