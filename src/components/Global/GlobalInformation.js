import React from "react"

import TotalValue from "./TotalValue"
import data from "../../data/stats.json"
import "./Global.css"

const GlobalInformation = () => {
  return (
    <section className="global">
      <h1 className="global__title">
        Some data about our contributions:
      </h1>
      <div className="global__content">
        <TotalValue value={data.totalMembers} text="members" />
        <TotalValue value={data.membersWithRepositories} text="repositories" />
      </div>
    </section>
  )
}

export default GlobalInformation
