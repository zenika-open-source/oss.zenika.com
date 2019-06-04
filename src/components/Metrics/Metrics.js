import React from "react"

import data from "../../data/stats.json"
import contributors from './icons/contributors.svg'
import projects from './icons/projects.svg'
import repositories from './icons/repositories.svg'

import { Metric } from "./Metric"
import "./Metrics.css"

const Metrics = () => {
  return (
    <article className="metrics">
      <Metric value={data.totalMembers} text="contributors" image={contributors} />
      <Metric value={data.membersWithRepositories} text="projects" image={projects} />
      <Metric value={data.membersWithRepositories} text="repos" image={repositories} />
    </article>
  )
}

export default Metrics
