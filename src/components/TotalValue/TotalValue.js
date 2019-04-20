import React from 'react'
import CountUp from 'react-countup'

import "./TotalValue.css"

const TotalValue = ({ value, text }) => {
  return (
    <h3 className="global__value">
      <CountUp end={value} /> {text}
    </h3>
  )
}

export default TotalValue
