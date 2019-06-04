import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Metrics } from "../components/Metrics"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Metrics />
  </Layout>
)

export default IndexPage
