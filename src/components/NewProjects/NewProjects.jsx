import React from "react";

import { ProjectCard } from "./ProjectCard";
import quickperf from "./images/quickperf.jpeg";
import hygie from "./images/hygie.png";
import "./NewProjects.css";

const NewProjects = () => (
  <article className="newProjects">
    <h2>highlighted projects</h2>
    <div className="newProjects__content">
      <ProjectCard
        title="readme-md-generator"
        description="CLI that generates beautiful README.md files"
        image={
          <span
            role="img"
            aria-label="project"
            style={{ fontSize: "100px", marginRight: "2rem" }}
          >
            📄
          </span>
        }
        github="https://github.com/kefranabg/readme-md-generator"
        website="https://www.npmjs.com/package/readme-md-generator"
        languages={["nodejs", "javascript"]}
      />
      <ProjectCard
        title="quickperf"
        description="QuickPerf is a testing library for Java providing annotations to quickly evaluate performance"
        image={quickperf}
        github="https://github.com/quick-perf/quickperf"
        website="https://github.com/quick-perf/doc/wiki/QuickPerf"
        languages={["java"]}
      />
      <ProjectCard
        title="Hygie"
        description="Easy-to-use API allowing you to interact with GIT events and manage your project's life-cycle"
        image={hygie}
        github="https://github.com/zenika-open-source/hygie"
        website="https://zenika-open-source.github.io/hygie/"
        languages={["javascript", "NestJS"]}
      />
    </div>
  </article>
);

export default NewProjects;
