import React from 'react';

import { People } from './People';
import { TopProjects } from './TopProjects';

import './Stats.css';

const Stats = () => (
  <div className="stats">
    <People />
    <TopProjects />
  </div>
);

export default Stats;
