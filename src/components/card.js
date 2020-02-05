import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 200px;
  height: 40px;
  border-radius: 12px;
  box-shadow: 1px 3px 5px -10px rgba(0, 0, 0, 0.5);
`;

// {
//   id,
//   body: { closed_at, merged_at, updated_at },
//   buildResult: { message, status },
//   pullrequest: { issue_url, node_id, number, title, url },
//   user: { avatar_url, login }
// }

// TODO: Card does not need all this info. Slim down to essentials
const card = props => {
  console.log(props);
  return <StyledCard status={status} />;
};

export default card;
