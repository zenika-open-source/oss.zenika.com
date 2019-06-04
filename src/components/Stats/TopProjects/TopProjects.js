import React from "react";

import { Project } from './Project';
import "./TopProjects.css";

const TopProjects = () => {
  return (
    <article className="topProjects">
      <div className="topProjects__title">
        <h2>Top projects</h2>
      </div>
      <Project
        title="Immutad•t"
        description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
        stars={157}
      />
      <Project
        title="Immutad•t"
        description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
        stars={157}
      />
      <Project
        title="Immutad•t"
        description="immutadot (pronounced immutadot) is a JavaScript library to deal with nested immutable structures."
        stars={157}
      />
    </article>
  );
};

export default TopProjects;
