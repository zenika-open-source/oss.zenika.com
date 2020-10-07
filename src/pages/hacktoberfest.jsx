/* eslint-disable no-plusplus */
import { Link } from "gatsby";
import React, { useCallback, useMemo, useState } from "react";
import useHacktoberfest from "../components/Hacktoberfest/useHacktoberfest";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./hacktober.css";

function getPRCount(user) {
  return user.contributionsCollection.pullRequestContributions.totalCount;
}

function addRanks(sortedData) {
  let lastRank = 1;
  let lastTotalCount = null;
  let exaequo = 0;
  for (let i = 0; i < sortedData.length; i++) {
    const { user } = sortedData[i];
    const totalCount = getPRCount(user);
    if (lastTotalCount === totalCount) {
      exaequo++;
    } else {
      lastRank += exaequo;
      exaequo = 1;
    }
    user.rank = lastRank;
    lastTotalCount = totalCount;
  }
  return sortedData;
}

const HacktoberfestPage = () => {
  const { data } = useHacktoberfest();
  const [locationFilter, setLocationFilter] = useState("");

  const handleLocationFilter = useCallback((e) => {
    setLocationFilter(e.target.value);
  });

  const leaderboard = useMemo(() => {
    if (!data) return null;
    const sortedData = data
      .filter(({ user }) => {
        if (locationFilter === "") return true;
        return user.location === locationFilter;
      })
      .sort((a, b) => {
        return getPRCount(b.user) - getPRCount(a.user);
      });
    return addRanks(sortedData);
  }, [data, locationFilter]);

  return (
    <Layout noHero>
      <SEO
        title="OSS by Zenika"
        keywords={["gatsby", "application", "react"]}
      />
      <article className="hacktober__body">
        <Link className="blog-post__back-home" to="/">
          Back to home
        </Link>
        <h2>
          <strong>Zenika's Hacktoberfest Leaderboard</strong>
        </h2>
        <p>Count the number of PR between Oct. 1st and Oct. 31st 2020.</p>
        <p>
          <a
            href="https://github.com/zenika-open-source/insights-website#zenika-hacktoberfest-leaderboard-2020"
            target="new"
          >
            How to be added to the Zenika Leaderboard ?
          </a>
        </p>
        {!leaderboard && <div>Loading...</div>}
        {leaderboard && (
          <>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>GitHub username</th>
                  <th>Number of pull requests</th>
                  <th>
                    <select onChange={handleLocationFilter}>
                      <option value="">Location</option>
                      <option value="Bordeaux, FR">Bordeaux, FR</option>
                      <option value="Brest, FR">Brest, FR</option>
                      <option value="Grenoble, FR">Grenoble, FR</option>
                      <option value="Lille, FR">Lille, FR</option>
                      <option value="Lyon, FR">Lyon, FR</option>
                      <option value="Montreal, CA">Montreal, CA</option>
                      <option value="Nantes, FR">Nantes, FR</option>
                      <option value="Paris, FR">Paris, FR</option>
                      <option value="Rennes, FR">Rennes, FR</option>
                      <option value="Singapore, SG">Singapore, SG</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map(({ user }) => (
                  <tr key={user.login}>
                    <td>{user.rank}</td>
                    <td>
                      <a href={`https://github.com/${user.login}`}>
                        {user.login}
                      </a>
                    </td>
                    <td>{getPRCount(user)}</td>
                    <td>{user.location}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </article>
      <article className="hacktober__body">
        <h2>
          <strong>Resources</strong>
        </h2>
        <p>
          Here some resources to help you to start contributing on Open Source.
        </p>
        <ul>
          <li>
            <a
              target="new"
              href="https://oss.zenika.com/white-paper/getting-started"
            >
              Getting started on Open Source
            </a>
          </li>
          <li>
            <a
              target="new"
              href="https://oss.zenika.com/white-paper/preparing-your-project-being-open-sourced"
            >
              Preparing your project being open sourced
            </a>
          </li>
          <li>
            <a target="new" href="https://oss.zenika.com/white-paper/promotion">
              Open source promotion cheat sheet
            </a>
          </li>
          <li>
            <a target="new" href="https://oss.zenika.com/white-paper/licenses">
              Understanding software licenses
            </a>
          </li>
          <li>
            <a
              target="new"
              href="https://hacktoberfest.digitalocean.com/details"
            >
              Hacktoberfest resources
            </a>
          </li>
        </ul>
      </article>
    </Layout>
  );
};

export default HacktoberfestPage;
