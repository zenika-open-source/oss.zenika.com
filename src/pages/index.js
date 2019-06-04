import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Metrics } from "../components/Metrics"
import { Stats } from "../components/Stats"
import { NewProjects } from "../components/NewProjects"
import { Resources } from "../components/Resources"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Metrics />
    <Stats />
    <NewProjects />
    <Resources />
  </Layout>
)

export default IndexPage
