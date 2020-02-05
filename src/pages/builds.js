import React from "react";

import { useBuilds } from "../util/hooks";

import BuildsTable from "../components/buildsTable";

const Builds = () => {
  const { builds } = useBuilds();
  return (
    <div>
      <h1 className="page-title">Builds</h1>
      <BuildsTable builds={builds} />
    </div>
  );
};

export default Builds;
