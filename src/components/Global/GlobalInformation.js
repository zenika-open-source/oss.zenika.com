import React from "react"

import TotalMembers from "./TotalMembers"
import TotalRepositories from "./TotalRepositories"
import data from "../../data/stats.json"
import "./Global.css"

const GlobalInformation = () => {
  return (
    <section className="global">
      <h1 className="global__title">
        Here's an overview of our contributions
      </h1>
      <div className="global__content">
        <TotalMembers value={data.totalMembers} />
        <TotalRepositories value={data.membersWithRepositories} />
      </div>
    </section>
  )
}

export default GlobalInformation
