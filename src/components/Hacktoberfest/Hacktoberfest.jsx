import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";

import "./Hacktoberfest.css";

function Stat({ title, value }) {
  return (
    <div className="stat">
      <span className="stat__title">{title}</span>
      <span className="stat__value">{value}</span>
    </div>
  );
}

export function Hacktoberfest() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://europe-west1-github-insights-247314.cloudfunctions.net/hacktoberfest"
    )
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData(null));
  }, []);

  if (data === null) return null;

  const numberOfPullRequests = data.reduce(
    (acc, { user }) =>
      acc + user.contributionsCollection.pullRequestContributions.totalCount,
    0
  );
  const completionRate = Math.round(
    (data
      .map(
        ({ user }) =>
          user.contributionsCollection.pullRequestContributions.totalCount
      )
      .filter((pullRequestsTotal) => pullRequestsTotal >= 4).length /
      data.length) *
      100
  );

  return (
    <div className="hacktoberfest">
      <div className="hacktoberfest__wrapper">
        <img
          className="hacktoberfest__logo"
          src={logo}
          alt="Hacktoberfest's logo"
        />
        {data.length > 0 && (
          <div className="hacktoberfest__stats">
            <Stat title="Zenikas" value={data.length} />
            <Stat title="Pull requests" value={numberOfPullRequests} />
            <Stat title="Completion" value={`${completionRate}%`} />
          </div>
        )}
      </div>
    </div>
  );
}

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
