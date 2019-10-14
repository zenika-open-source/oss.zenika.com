import React from 'react';

import data from '../../data/stats.json';
import contributors from './icons/contributors.svg';
import projects from './icons/projects.svg';
import contributions from './icons/contributions.svg';

import { Metric } from './Metric';
import './Metrics.css';

const Metrics = () => (
  <article className="metrics">
    <Metric value={data.totalMembers} text="contributors" image={contributors} subtitle="Worldwide" />
    <Metric value={data.totalRepositories + data.totalOrganizationRepositories} text="projects" image={projects} subtitle="Apps, Libs, articles, Trainings" />
    <Metric value={data.totalContributions} text="contributions" image={contributions} subtitle="On famous & personal projects" />
  </article>
);

export default Metrics;
