import "./ExpenseFilter.scss";
interface IExpenseFilterProps {
  selected: string;
  onChangeFilter: any;
}
export const ExpenseFilter = (props: IExpenseFilterProps) => {
  const { selected, onChangeFilter } = props;
  const dropdownChangeHandler = (event: any) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};
