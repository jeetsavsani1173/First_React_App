import "./ExpenseDate.css";

function expenseDate(props1) {
  const obj = props1.date;
  const month = obj.toLocaleString("en-US", { month: "long" });
  const year = obj.getFullYear();
  const day = obj.getDate();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}

export default expenseDate;
