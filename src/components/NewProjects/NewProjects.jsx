import React from 'react';

import { ProjectCard } from './ProjectCard';
import bento from './images/bento-starter.svg';
import immutadot from './images/immutadot.svg';
import emendare from './images/emendare.png';
import './NewProjects.css';

const NewProjects = () => (
  <article className="newProjects">
    <h2>highlighted projects</h2>
    <div className="newProjects__content">
      <ProjectCard
        title="bento-starter"
        description="Full-Stack solution to quickly build PWA applications with Vue.js and Firebase"
        image={bento}
        github="https://github.com/kefranabg/bento-starter"
        website="https://bento-starter.firebaseapp.com"
        languages={['pwa', 'vuejs', 'firebase']}
      />
      <ProjectCard
        title="Immutad•t"
        description="immutadot (pronounced immutadot) is a JavaScript library that manages nested immutable structures."
        image={immutadot}
        github="https://github.com/zenika-open-source/immutadot"
        website="https://immutadot.zenika.com"
        languages={['javascript']}
      />
      <ProjectCard
        title="Emendare"
        description="Democratic platform to draft amendable texts. Emendare is a citizen, non-profit, distributed and open-source initiative. It helps groups share and improve texts iteratively."
        image={emendare}
        github="https://github.com/jimmyleray/Emendare"
        website="https://emendare.org"
        languages={['javascript']}
      />
    </div>
  </article>
);

export default NewProjects;
