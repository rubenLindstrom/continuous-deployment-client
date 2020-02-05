import React, { useEffect } from "react";

import { useBuild } from "../util/hooks";

const SingleBuild = props => {
  const { build, loading } = useBuild(props.match.params.id);

  useEffect(() => console.log(build), [build]);

  if (loading) return <p className="status-text">Loading...</p>;

  return (
    <div>
      <h1 className="page-title">{build.pullrequest.title}</h1>
    </div>
  );
};

export default SingleBuild;
