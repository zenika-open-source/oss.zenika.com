import React from "react";

import { Helmet } from "react-helmet";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Metrics } from "../components/Metrics";
import { Stats } from "../components/Stats";
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
    <Stats />
    <Blog />
    <Resources />
  </Layout>
);

export default IndexPage;
