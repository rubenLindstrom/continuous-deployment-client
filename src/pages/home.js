import React, { useEffect } from "react";

import { useBuilds } from "../util/hooks";

import BuildsTable from "../components/buildsTable";

const Home = () => {
  const { builds, loading } = useBuilds();
  useEffect(() => console.log(builds), [builds]);
  return (
    <>
      <h1 className="page-title">Home</h1>
      <h2 className="subtitle">Latest Builds</h2>
      {loading ? (
        <p className="status-text">Loading...</p>
      ) : Object.keys(builds).length ? (
        <BuildsTable builds={builds} limit={2} />
      ) : (
        <p className="status-text">No builds to show yet</p>
      )}
    </>
  );
};

export default Home;
