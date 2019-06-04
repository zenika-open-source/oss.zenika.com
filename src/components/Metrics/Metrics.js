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
      <Metric value={data.totalMembers} text="contributors" image={contributors} subtitle="All around the world" />
      <Metric value={data.membersWithRepositories} text="projects" image={projects}  subtitle="Apps, Librairies, Trainings..."/>
      <Metric value={data.membersWithRepositories} text="contributions" image={repositories} subtitle="On famous & personal projects" />
    </article>
  )
}

export default Metrics
