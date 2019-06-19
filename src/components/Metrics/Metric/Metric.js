import React from 'react'

import "./Metric.css"

const Metric = ({ value, text, image, subtitle }) => {
  let displayedValue = value > 1000 ? Math.trunc(value / 1000) : value

  return (
    <div className="metric">
      <img src={image} alt="text" />
      <div>
        <span className="metric__value">
          {displayedValue}{value > 1000 && 'K'}
        </span>
        <span className="metric__title">
          {text}
        </span>
      </div>
      <p className="metric__subtitle">{subtitle}</p>
    </div>
  )
}

export default Metric
