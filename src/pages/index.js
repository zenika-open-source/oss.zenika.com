import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { Metrics } from "../components/Metrics";
import { Stats } from "../components/Stats";
import { NewProjects } from "../components/NewProjects";
import { Resources } from "../components/Resources";
import { Blog } from "../components/Blog";

const IndexPage = () => {
  return (
    <Layout>
      <SEO
        title="OSS by Zenika"
        keywords={[`gatsby`, `application`, `react`]}
      />
      <NewProjects />
      <Metrics />
      <Stats />
      <Blog />
      <Resources />
    </Layout>
  );
};

export default IndexPage;
