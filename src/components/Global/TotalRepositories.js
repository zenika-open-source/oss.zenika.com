import React from 'react'

import "./Global.css"

const TotalRepositories = ({ value }) => {
  return (
    <h1 className="global__value">
      {value} <span>repositories</span>
    </h1>
  )
}

export default TotalRepositories
