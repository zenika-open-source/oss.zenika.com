import React from "react";

import "./People.css";

const people = [{
  name: 'Charles-Henri Guerin',
  nbContributions: 51,
},{
  name: 'Charles-Henri Guerin',
  nbContributions: 51,
},{
  name: 'Charles-Henri Guerin',
  nbContributions: 51,
},{
  name: 'Charles-Henri Guerin',
  nbContributions: 51,
},{
  name: 'Charles-Henri Guerin',
  nbContributions: 51,
}]

const People = () => {
  return (
    <article className="people">
      <div className="people__title">
        <h2>Top contributors</h2>
        <div className="people__list">
          {people.map(person => (
            <div key={person.name} className="people__row">
              <div className="people__name">{person.name}</div>
              <div className="people__nbContributions">{person.nbContributions}</div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
};

export default People;
