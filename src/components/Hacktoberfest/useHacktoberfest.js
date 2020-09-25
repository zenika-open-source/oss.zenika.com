import { useEffect, useMemo, useState } from "react";

function computePRCount(data) {
  if (!data) return 0;
  return data.reduce(
    (acc, { user }) =>
      acc + user.contributionsCollection.pullRequestContributions.totalCount,
    0
  );
}

function computeCompletionRate(data) {
  if (!data) return 0;
  return Math.round(
    (data
      .map(
        ({ user }) =>
          user.contributionsCollection.pullRequestContributions.totalCount
      )
      .filter((pullRequestsTotal) => pullRequestsTotal >= 4).length /
      data.length) *
      100
  );
}

export default () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(
      "https://europe-west1-github-insights-247314.cloudfunctions.net/hacktoberfest"
    )
      .then((res) => res.json())
      .then(setData)
      .catch(() => setData([]));
  }, []);

  return useMemo(
    () => ({
      data,
      numberOfPullRequests: computePRCount(data),
      completionRate: computeCompletionRate(data),
    }),
    [data]
  );
};
