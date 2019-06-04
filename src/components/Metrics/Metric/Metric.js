import React from 'react'
import CountUp from 'react-countup'

import "./Metric.css"

const Metric = ({ value, text, image }) => {
  return (
    <div className="metric">
      <img src={image} alt="text" />
      <div>
        <span className="metric__value"><CountUp end={value} /></span> {text}
      </div>
    </div>
  )
}

export default Metric
