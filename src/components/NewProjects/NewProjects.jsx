import React from "react";

import { ProjectCard } from "./ProjectCard";
import quarkus from "./images/quarkus.png";
import "./NewProjects.css";

const NewProjects = () => (
  <article className="newProjects">
    <h2>highlighted projects</h2>
    <div className="newProjects__content">
      <ProjectCard
        title="promote-open-source-project"
        description="📄 How to promote my open source project?"
        image={
          <span
            role="img"
            aria-label="project"
            style={{ fontSize: "100px", marginRight: "2rem" }}
          >
            📄
          </span>
        }
        github="https://github.com/zenika-open-source/promote-open-source-project"
        languages={["markdown"]}
      />

      <ProjectCard
        title="awesome-remote-work"
        description="😎 Awesome lists about remote work"
        image={
          <span
            role="img"
            aria-label="project"
            style={{ fontSize: "100px", marginRight: "2rem" }}
          >
            📄
          </span>
        }
        github="https://github.com/zenika-open-source/awesome-remote-work"
        languages={["markdown"]}
      />

      <ProjectCard
        title="quarkus"
        description="A Kubernetes Native Java stack tailored for OpenJDK HotSpot and GraalVM, crafted from the best of breed Java libraries and standards."
        image={quarkus}
        github="https://github.com/quarkusio"
        website="https://quarkus.io/"
        languages={["java"]}
      />
    </div>
  </article>
);

export default NewProjects;
