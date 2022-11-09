import React, { useState } from 'react'

import Expenses from './components/Expenses/Expenses'
import NewExpense from './components/NewExpense/NewExpense';

const SAMPLE_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14)
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28)
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12)
  }
];

function App() {
  const [expenses, setExpenses] = useState(SAMPLE_EXPENSES)

  //taking the expense which is passed down to child component and then passed back up, adding the expense to the array and then copying the previous expenses/state to it
  const addExpenseHandler = expense => { 
    setExpenses(prevExpenses => { //prevExpenses allows us to grab the current state. It is an updating state function and AUTOMATICALLY receives the LATEST state snapshot
      return [expense, ...prevExpenses]
    })
  }


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
