import React from "react";

import { ProjectCard } from './ProjectCard';
import "./NewProjects.css";

const NewProjects = () => {
  return (
    <article className="newProjects">
      <h2>New projects</h2>
      <div className="newProjects__content">
        <ProjectCard
          title="Immutad•t"
          description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
          stars={157}
          github="https://github.com/zenika-open-source/immutadot"
          website="https://immutadot.zenika.com"
          languages={['javascript']}
        />
        <ProjectCard
          title="Immutad•t"
          description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
          stars={157}
          github="https://github.com/zenika-open-source/immutadot"
          website="https://immutadot.zenika.com"
          languages={['javascript']}
        />
        <ProjectCard
          title="Immutad•t"
          description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
          stars={157}
          github="https://github.com/zenika-open-source/immutadot"
          website="https://immutadot.zenika.com"
          languages={['javascript']}
        />
      </div>
    </article>
  );
};

export default NewProjects;
