import React from 'react'

import ChartBar from './ChartBar'
import './Chart.css'

const Chart = props => {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value) //transforming dataPoint objects into JUST their number. We do this because Math.max, needs comma seperated numbers and then it returns the biggest number
    const totalMaximum = Math.max(...dataPointValues)

    return <div className='chart'>
        {props.dataPoints.map(dataPoint => <ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label}/>)}
    </div>
}

export default Chart