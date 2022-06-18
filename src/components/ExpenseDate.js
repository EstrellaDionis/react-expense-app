import './ExpenseDate.css'

function ExpenseDate(props) {
     //create these variables instead of coding them into the divs to make them reusable
     const month = props.date.toLocaleString('en-US', { month: 'long'})
     const day = props.date.toLocaleString('en-US', {day: '2-digit'})
     const year = props.date.getFullYear()

     return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__day'>{day}</div>
            <div className='expense-date___year'>{year}</div>
            </div>
     )
}

export default ExpenseDate;