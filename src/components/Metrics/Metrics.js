import React from "react"

import data from "../../data/stats.json"
import { Metric } from "./Metric"
import "./Metrics.css"

const Metrics = () => {
  return (
    <section className="metrics">
      <Metric value={data.totalMembers} text="contributors" />
      <Metric value={data.membersWithRepositories} text="projects" />
      <Metric value={data.membersWithRepositories} text="repos" />
    </section>
  )
}

export default Metrics
