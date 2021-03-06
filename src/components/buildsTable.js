import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import Card from "./card";

const BuildsTable = ({ builds, limit }) => {
  const buildsToRender = limit
    ? Object.keys(builds).slice(0, limit)
    : Object.keys(builds);
  return (
    <div className="builds">
      {buildsToRender.map(key => {
        const build = builds[key];
        const {
          data: {
            build_result: { timestamp, status },
            body,
            number,
            title,
            user: { avatar_url, login }
          },
          type
        } = build;
        return (
          <Link key={key} to={`/builds/${key}`}>
            <Card
              {...{ timestamp, body, status, number, title, avatar_url, login }}
            />
          </Link>
        );
      })}
      {limit && limit < Object.keys(builds).length && (
        <Link to={`/builds`} className="yellow-link">
          See all builds
        </Link>
      )}
    </div>
  );
};

BuildsTable.propTypes = {
  builds: PropTypes.object.isRequired,
  limit: PropTypes.number
};

export default BuildsTable;
