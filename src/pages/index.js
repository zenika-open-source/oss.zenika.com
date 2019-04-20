import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Landing } from "../components/Landing"
import { Global } from "../components/Global"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Landing />
    <Global />
  </Layout>
)

export default IndexPage
