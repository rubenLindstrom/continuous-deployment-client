import React, { useEffect } from "react";

import { useBuilds } from "../util/hooks";

import Card from "./card";

const Builds = () => {
  const builds = useBuilds();
  useEffect(() => console.log(builds), [builds]);

  return (
    <div>
      {Object.keys(builds).map(key => (
        <Card {...builds[key]} />
      ))}
    </div>
  );
};

export default Builds;
