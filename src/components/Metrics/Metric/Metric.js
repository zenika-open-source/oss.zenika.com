import React from 'react'
import CountUp from 'react-countup'

import "./Metric.css"

const Metric = ({ value, text, image, subtitle }) => {
  return (
    <div className="metric">
      <img src={image} alt="text" />
      <div>
        <span className="metric__value"><CountUp end={value} /></span><span className="metric__title">{text}</span>
      </div>
      <div className="metric__subtitle">{subtitle}</div>
    </div>
  )
}

export default Metric
