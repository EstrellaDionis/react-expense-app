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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {
        //was previously props.items.map but now, we are mapping through every filtered year
        filteredExpenses.map(ex => {
            return <ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        })
      }
    </Card>
  );
}

export default Expenses;
