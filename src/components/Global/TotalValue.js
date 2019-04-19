import React, { useState, useEffect } from 'react'
import { CountUp } from 'countup.js'

import "./Global.css"

const TotalValue = ({ value, text }) => {
  useEffect(() => {
    const countup = new CountUp(`countup-${text}`, value)
    countup.start()
  }, [])

  return (
    <h1 className="global__value">
      <span id={`countup-${text}`}>{value}</span> {text}
    </h1>
  )
}

export default TotalValue
