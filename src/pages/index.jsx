import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Metrics } from "../components/Metrics";
import { NewProjects } from "../components/NewProjects";
import { Resources } from "../components/Resources";
import { Blog } from "../components/Blog";

const IndexPage = () => (
  <Layout>
    <SEO title="OSS by Zenika" keywords={["gatsby", "application", "react"]} />
    <Helmet>
      <script async defer src="https://buttons.github.io/buttons.js" />
    </Helmet>
    <NewProjects />
    <Metrics />
    <Blog />
    <Resources />
  </Layout>
);

export default IndexPage;
