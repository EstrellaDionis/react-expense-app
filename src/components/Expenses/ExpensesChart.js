import React from 'react'

import Chart from '../Chart/Chart'

const ExpensesChart = props => { //props are filtered expenses from Expenses.js file
    const chartDataPoints = [
        { label: 'Jan', value: 0 },
        { label: 'Feb', value: 0 },
        { label: 'Mar', value: 0 },
        { label: 'Apr', value: 0 },
        { label: 'May', value: 0 },
        { label: 'Jun', value: 0 },
        { label: 'Jul', value: 0 },
        { label: 'Aug', value: 0 },
        { label: 'Sep', value: 0 },
        { label: 'Oct', value: 0 },
        { label: 'Nov', value: 0 },
        { label: 'Dec', value: 0 },
    ]

    //Lesson 71
    for (const expense of props.expenses){ //props are filtered expenses from Expenses.js file
        const expenseMonth = expense.date.getMonth(); //starting at 0 => January => 0
        chartDataPoints[expenseMonth].value += expense.amount //adding expense to the value. Whats happening here, the cDP[0].value (value is amount here) + expense correlating to that month
    }

    return <Chart dataPoints={chartDataPoints}/>
}

export default ExpensesChart