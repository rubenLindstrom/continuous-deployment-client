import React from "react";
import { Link } from "react-router-dom";

import Card from "./card";

const BuildsTable = ({ builds, limit }) => {
  const buildsToRender = limit
    ? Object.keys(builds).slice(0, limit)
    : Object.keys(builds);
  return (
    <div className="builds">
      {buildsToRender.map(key => (
        <Link key={key} to={`/builds/${key}`}>
          <Card {...builds[key]} />
        </Link>
      ))}
      {limit && limit < Object.keys(builds).length && (
        <Link to={`/builds`} className="yellow-link">
          See all builds
        </Link>
      )}
    </div>
  );
};

export default BuildsTable;
