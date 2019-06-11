import React from "react";

import data from '../../../data/stats.json'

import "./People.css";

const People = () => {
  return (
    <article className="people">
      <div className="people__title">
        <h2>Top contributors</h2>
        <div className="people__list">
          {data.topContributors.map(person => (
            <div key={person.login} className="people__row">
              <div className="people__name"><a href={`https://github.com/${person.login}`}>{person.login}</a></div>
              <div className="people__nbContributions">{person.totalContributions}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default People;
