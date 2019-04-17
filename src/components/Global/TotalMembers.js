import React from 'react'

import "./Global.css"

const TotalMembers = ({ value }) => {
  return (
    <h1 className="global__value">
      {value} <span>members</span>
    </h1>
  )
}

export default TotalMembers
