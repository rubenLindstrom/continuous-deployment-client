import React from "react";

// TODO: Card does not need all this info. Slim down to essentials
const card = ({
  id,
  body: { closed_at, merged_at, updated_at },
  buildResult: { message, status },
  pullrequest: { issue_url, node_id, number, title, url },
  user: { avatar_url, login }
}) => {
  return <div className="card"></div>;
};

export default card;
