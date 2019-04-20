import React from "react"

import { TotalValue } from "../TotalValue"
import data from "../../data/stats.json"
import "./Global.css"

const GlobalInformation = () => {
  return (
    <article className="global">
      <h2 className="global__title">
        Some data about our contributions:
      </h2>
      <div>
        <TotalValue value={data.totalMembers} text="members" />
        <TotalValue value={data.membersWithRepositories} text="repositories" />
      </div>
    </article>
  )
}

export default GlobalInformation
