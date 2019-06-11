import React from 'react'
import CountUp from 'react-countup'

import "./Metric.css"

const Metric = ({ value, text, image, subtitle }) => {
  let displayedValue = value
  if (value > 1000) {
    displayedValue = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 3 }).format(value / 1000)
  }
  return (
    <div className="metric">
      <img src={image} alt="text" />
      <div>
        <span className="metric__value"><CountUp end={displayedValue} />{value > 1000 && 'K'}</span><span className="metric__title">{text}</span>
      </div>
      <div className="metric__subtitle">{subtitle}</div>
    </div>
  )
}

export default Metric
