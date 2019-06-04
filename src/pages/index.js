import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Metrics } from "../components/Metrics"
import { TopProjects } from "../components/TopProjects"
import { NewProjects } from "../components/NewProjects"
import { Resources } from "../components/Resources"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Metrics />
    <TopProjects />
    <NewProjects />
    <Resources />
  </Layout>
)

export default IndexPage
