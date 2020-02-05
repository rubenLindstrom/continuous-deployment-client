import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  width: 700px;
  /* padding: 1rem; */
  border-radius: 0 4px 4px 0;
  box-shadow: 0 3px 5px -3px rgba(0, 0, 0, 0.5);
  background-color: #fafafa;
  border-left: 8px solid ${props => (props.status ? "#2ecc71" : "#e74c3c")};
  overflow: hidden;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition-property: transform, background-color;
  transition-duration: 0.33s;
  transition-timing-function: ease;
  &:hover {
    transform: scale(1.03);
    background-color: #f4f4f4;
  }

  .outer-wrapper {
    display: flex;
    padding: 1rem;
    &:first-child {
      border-right: 1px solid #ddd;
      display: flex;
      flex: 0.6;
    }
    .info-wrapper {
      width: 80px;
      margin-right: 2rem;
      .pr-title {
        color: ${props => (props.status ? "#2ecc71" : "#e74c3c")};
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      figure {
        display: flex;

        img {
          height: auto;
          width: 15px;
          margin-right: 0.35rem;
          border-radius: 50%;
        }
      }
    }

    .title-wrapper {
      color: #1d1d1d;
    }
  }
`;

// TODO: Card does not need all this info. Slim down to essentials
const card = ({
  id,
  body: { closed_at, merged_at, updated_at },
  buildResult: { message, status },
  pullrequest: { issue_url, node_id, number, title, url },
  user: { avatar_url, login }
}) => {
  return (
    <StyledCard status={status}>
      <div className="outer-wrapper">
        <div className="info-wrapper">
          <div className="pr-title">PR #{number}</div>
          <figure>
            <img src={avatar_url} alt="user avatar" />
            <figcaption>{login}</figcaption>
          </figure>
        </div>
        <div className="title-wrapper">{title}</div>
      </div>
      <div className="outer-wrapper">
        <div></div>
        <div></div>
      </div>
    </StyledCard>
  );
};

export default card;
