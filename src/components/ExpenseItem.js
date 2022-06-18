import './ExpenseItem.css'

function ExpenseItem(props){
    // const expenseDate = new Date(2022, 6, 16)
    // const expenseTitle = 'Car Insurance'
    // const expenseAmount = 294.67

    return (
        <div className='expense-item'>
        <h2>{props.date.toISOString()}</h2>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <div className='expense-item__price'>${props.amount}</div>
        </div>
        </div>
    )
}

export default ExpenseItem