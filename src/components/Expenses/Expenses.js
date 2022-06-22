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

  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      {
        props.items.map(ex => {
            return <ExpenseItem key={ex.id} title={ex.title} amount={ex.amount} date={ex.date} />
        })
      }
    </Card>
  );
}

export default Expenses;
