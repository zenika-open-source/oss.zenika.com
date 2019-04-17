import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Landing } from "../components/Landing"
import GlobalInformation from "../components/Global/GlobalInformation"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <GlobalInformation />
  </Layout>
)

export default IndexPage
