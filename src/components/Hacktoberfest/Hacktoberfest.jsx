import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import logo from "./logo.png";

import "./Hacktoberfest.css";
import useHacktoberfest from "./useHacktoberfest";

function Stat({ title, value }) {
  return (
    <div className="stat">
      <span className="stat__title">{title}</span>
      <span className="stat__value">{value}</span>
    </div>
  );
}

export function Hacktoberfest() {
  const { data, completionRate, numberOfPullRequests, numberOfMergeRequests } =
    useHacktoberfest();

  return (
    <div className="hacktoberfest">
      <div className="hacktoberfest__wrapper">
        <img
          className="hacktoberfest__logo"
          src={logo}
          alt="Hacktoberfest's logo"
        />
        <div className="hacktoberfest__banner">
          <div className="hacktoberfest__title">
            <div>Happy Hacktoberfest!</div>
            <div>
              <Link to="/hacktoberfest">Watch the Zenika Leaderboard</Link>
            </div>
          </div>
          {data && (
            <div className="hacktoberfest__stats">
              <Stat title="Zenikas" value={data.length} />
              <Stat
                title="Contributions (PR/MR)"
                value={numberOfPullRequests + numberOfMergeRequests}
              />
              <Stat title="Completion" value={`${completionRate}%`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Stat.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};
