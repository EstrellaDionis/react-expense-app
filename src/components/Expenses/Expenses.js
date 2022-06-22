import React, { useState } from 'react'

import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear)
    console.log('Expenses.js')
    console.log(selectedYear)
  }

  //Conditionally filtering to only show items that are in the year selected. 
  //getFullYear() is a js method
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expensesContent = <p>No expenses found.</p>

  if(filteredExpenses.length > 0){
    expensesContent = filteredExpenses.map(ex => {
      return <ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
  })

  }

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {expensesContent}
    </Card>
  );
}

export default Expenses;
