import ExpenseItem from "./ExpenseItem";
import './Expenses.css'

function Expenses(props) {
  return (
    <div className="expenses">
      {
        props.items.map(ex => {
            return <ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        })
      }
    </div>
  );
}

export default Expenses;
