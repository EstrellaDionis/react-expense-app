import React from 'react'

import './ExpenseItem.css'
import './ExpenseDate'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'

// You grab props by typing props.nameThatFollows 
//props. is setting up the next piece to be recognized as a prop which you will grab

const ExpenseItem = (props) => {
    return (
        <li>
        <Card className='expense-item'>
        <ExpenseDate date={props.date}/>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </Card>
        </li>
    )
}

export default ExpenseItem