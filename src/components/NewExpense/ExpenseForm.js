import React, { useState } from 'react'

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [titleChange, setTitleChange] = useState('')
    const [dateChange, setDateChange] = useState('')
    const [amountChange, setAmountChange] = useState('')

    // const [userInput, setUserInput] = useState({
    //     titleChange: '',
    //     dateChange: '',
    //     amountChange: '',
    // })

    const titleChangeHandler = (event) => {
        setTitleChange(event.target.value) 

        //a little better
        // setUserInput({
        //     ...userInput, //we spread here because we don't want to lose the other key value pairs in the slice of state
        //     titleChange: event.taget.value

        //best way to do this when you're depending on a previous state
        // setUserInput((prevState) => {
        //     return { ...prevState, titleChange: event.target.value }
        // })

        
    };

    const dateChangeHandler = (event) => {
        setDateChange(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     dateChange: event.taget.value
        // })
    }

    const amountChangeHandler = (event) => {
        setAmountChange(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     amountChange: event.taget.value
        // })
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