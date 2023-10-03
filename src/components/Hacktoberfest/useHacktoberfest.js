import { useEffect, useMemo, useState } from "react";

function computePRCount(data) {
  if (!data) return 0;
  return data.reduce((acc, infosUser) => {
    if (
      infosUser[1].github &&
      undefined != infosUser[1].github.nbContributions
    ) {
      return acc + infosUser[1].github.nbContributions;
    } else return acc;
  }, 0);
}

function computeMRCount(data) {
  if (!data) return 0;
  return data.reduce((acc, infosUser) => {
    if (
      infosUser[1].gitlab &&
      undefined != infosUser[1].gitlab.nbContributions
    ) {
      return acc + infosUser[1].gitlab.nbContributions;
    } else return acc;
  }, 0);
}

function computeCompletionRate(data) {
  if (!data || data.length === 0) return 0;

  return Math.round(
    (data
      .map((infosUser) => {
        var nbTotalPRMR = 0;
        if (
          infosUser[1].github &&
          undefined != infosUser[1].github.nbContributions
        )
          nbTotalPRMR += +infosUser[1].github.nbContributions;

        if (
          infosUser[1].gitlab &&
          undefined != infosUser[1].gitlab.nbContributions
        )
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
