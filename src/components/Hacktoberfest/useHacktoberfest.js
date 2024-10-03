import { useEffect, useMemo, useState } from "react";

function computePRCount(data) {
  if (!data) return 0;
  return data.reduce((acc, infosUser) => {
    if (infosUser[1].github && infosUser[1].github.nbContributions != null) {
      return acc + infosUser[1].github.nbContributions;
    }
    return acc;
  }, 0);
}

function computeMRCount(data) {
  if (!data) return 0;
  return data.reduce((acc, infosUser) => {
    if (infosUser[1].gitlab && infosUser[1].gitlab.nbContributions != null) {
      return acc + infosUser[1].gitlab.nbContributions;
    }
    return acc;
  }, 0);
}

function computeCompletionRate(data) {
  if (!data || data.length === 0) return 0;

  return Math.round(
    (data
      .map((infosUser) => {
        let nbTotalPRMR = 0;
        if (infosUser[1].github && infosUser[1].github.nbContributions != null)
          nbTotalPRMR += +infosUser[1].github.nbContributions;

        if (infosUser[1].gitlab && infosUser[1].gitlab.nbContributions != null)
          nbTotalPRMR += +infosUser[1].gitlab.nbContributions;

        return nbTotalPRMR;
      })
      .filter((pullRequestsTotal) => pullRequestsTotal >= 4).length /
      data.length) *
      100,
  );
}

export default () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://europe-west1-github-insights-247314.cloudfunctions.net/hacktoberfest",
    )
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return useMemo(
    () => ({
      data,
      numberOfPullRequests: computePRCount(data),
      numberOfMergeRequests: computeMRCount(data),
      completionRate: computeCompletionRate(data),
    }),
    [data],
  );
};
