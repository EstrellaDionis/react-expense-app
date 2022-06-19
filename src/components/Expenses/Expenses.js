import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'

function Expenses(props) {
  return (
    <Card className="expenses">
      {
        props.items.map(ex => {
            return <ExpenseItem id={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        })
      }
    </Card>
  );
}

export default Expenses;
