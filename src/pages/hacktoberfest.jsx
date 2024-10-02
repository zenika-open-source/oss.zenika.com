import { Link } from "gatsby";
import React, { useCallback, useMemo, useState } from "react";
import useHacktoberfest from "../components/Hacktoberfest/useHacktoberfest";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "./hacktober.css";

function getPRCount(infosUser) {
  if (
    infosUser &&
    infosUser.github &&
    undefined != infosUser.github.nbContributions
  ) {
    return infosUser.github.nbContributions;
  } else return 0;
}

function getMRCount(infosUser) {
  if (
    infosUser &&
    infosUser.gitlab &&
    undefined != infosUser.gitlab.nbContributions
  ) {
    return infosUser.gitlab.nbContributions;
  } else return 0;
}

function getMRPRCount(infosUser) {
  return getMRCount(infosUser) + getPRCount(infosUser);
}

function addRanks(sortedData) {
  let lastRank = 1;
  let lastTotalCount = null;
  let exaequo = 0;
  for (let i = 0; i < sortedData.length; i++) {
    const user = sortedData[i];
    const totalCount = getMRPRCount(user[1]);
    if (lastTotalCount === totalCount) {
      exaequo++;
    } else {
      lastRank += exaequo;
      exaequo = 1;
    }
    user[1].rank = lastRank;
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
      .filter((infosUsers) => {
        if (locationFilter === "") return true;
        return infosUsers[1].agency === locationFilter;
      })
      .sort((a, b) => {
        return getMRPRCount(b[1]) - getMRPRCount(a[1]);
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
        <p>Count the number of PR & MR between Oct. 1st and Oct. 31st 2024.</p>
        <p>
          <a
            href="https://github.com/zenika-open-source/oss.zenika.com#zenika-hacktoberfest-leaderboard"
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
                  <th>Nom</th>
                  <th>GitHub</th>
                  <th>Number of PR</th>
                  <th>GitLab</th>
                  <th>Number of MR</th>
                  <th>Total</th>
                  <th>
                    <select onChange={handleLocationFilter}>
                      <option value="">Location</option>
                      <option value="Bordeaux, FR">Bordeaux, FR</option>
                      <option value="Brest, FR">Brest, FR</option>
                      <option value="Casablanca, MA">Casablanca, MA</option>
                      <option value="Clermont-Ferrand, MA">
                        Clermont-Ferrand, FR
                      </option>
                      <option value="Grenoble, FR">Grenoble, FR</option>
                      <option value="Lille, FR">Lille, FR</option>
                      <option value="Lyon, FR">Lyon, FR</option>
                      <option value="Montreal, CA">Montreal, CA</option>
                      <option value="Nantes, FR">Nantes, FR</option>
                      <option value="Niort, FR">Niort, FR</option>
                      <option value="Paris, FR">Paris, FR</option>
                      <option value="Rennes, FR">Rennes, FR</option>
                      <option value="Singapore, SG">Singapore, SG</option>
                      <option value="Toulouse, FR">Toulouse, SG</option>
                    </select>
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((infosUser) => (
                  <tr key={infosUser[0]}>
                    <td>{infosUser[1].rank}</td>
                    <td>{infosUser[1].name}</td>
                    <td>
                      <a
                        href={`https://github.com/${infosUser[1].github.handle}`}
                      >
                        {infosUser[1].github.handle}
                      </a>
                    </td>
                    <td>{getPRCount(infosUser[1])}</td>
                    <td>
                      {infosUser[1].gitlab && (
                        <a
                          href={`https://gitlab.com/${infosUser[1].gitlab.handle}`}
                        >
                          {infosUser[1].gitlab.handle}
                        </a>
                      )}
                    </td>
                    <td>{getMRCount(infosUser[1])}</td>
                    <td>{getMRPRCount(infosUser[1])}</td>
                    <td>{infosUser[1].agency}</td>
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
