import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [titleChange, setTitleChange] = useState('')
    const [dateChange, setDateChange] = useState('')
    const [amountChange, setAmountChange] = useState('')

    const titleChangeHandler = (event) => {
        //if you console.log(event), you get to see all the properties attached to event. We want the target property but not just that, attached to target is also value and we want that as well
        //This also shows you the current state vs the 
        setTitleChange(event.target.value) 
    };

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setAmountChange(event.target.value)
    }

    

    const submitHandler = (event) => {
        event.preventDefault() //preventing page reload

        const expenseData = {
        title: titleChange,
        date: new Date(dateChange),
        amount: +amountChange
        }
        props.onSaveExpenseData(expenseData) //note the props. This is being passed from NewExpense.js
        //resets input values after submition
        setTitleChange('') 
        setAmountChange('')
        setDateChange('')
    }

    


    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input type='text' value={titleChange} onChange={titleChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={amountChange} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input type='date' min='2022-01-01' max='2022-12-31' value={dateChange} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='button' onClick={props.onCancel}>Cancel</button>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;