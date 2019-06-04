import React from 'react'
import CountUp from 'react-countup'

import "./Metric.css"

const Metric = ({ value, text }) => {
  return (
    <h3 className="metric__value">
      <CountUp end={value} /> {text}
    </h3>
  )
}

export default Metric
