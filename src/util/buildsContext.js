import React, { useState, useEffect } from "react";
import firebase from "./firebase";
import uuid from "react-uuid";

const BuildsContext = React.createContext();

const initialBuilds = {
  [uuid()]: {
    body: {
      closed_at: null,
      merged_at: null,
      updated_at: "2020-02-03T14:26:58Z"
    },
    buildResult: { message: "lorem ipsum", status: true },
    pullrequest: {
      issue_url: "https://github.com/repos/feluxz/CITEST/issues/13",
      node_id: "MDExOlB1bGxSZXF1ZXN0MzY5OTA1MDgy",
      number: 13,
      title: "[FIX] Fixed some awful bugs"
    },
    user: {
      avatar_url: "https://avatars0.githubusercontent.com/u/29494534?v=4",
      login: "chrpete"
    }
  },
  [uuid()]: {
    body: {
      closed_at: null,
      merged_at: null,
      updated_at: "2020-02-03T14:32:58Z"
    },
    buildResult: { message: "Task failed successfully", status: true },
    pullrequest: {
      issue_url: "https://github.com/repos/feluxz/CITEST/issues/13",
      node_id: "MDExOlB1bGxSZXF1ZXN0MzY5OTA1MDgy",
      number: 13,
      title: "[ADD] Added some cool stuff, much better now"
    },
    user: {
      avatar_url: "https://avatars0.githubusercontent.com/u/29494534?v=4",
      login: "chrpete"
    }
  },
  [uuid()]: {
    body: {
      closed_at: null,
      merged_at: null,
      updated_at: "2020-02-03T14:35:58Z"
    },
    buildResult: { message: "BROKEN, EVERYTHING FAILED!", status: false },
    pullrequest: {
      issue_url: "https://github.com/repos/feluxz/CITEST/issues/13",
      node_id: "MDExOlB1bGxSZXF1ZXN0MzY5OTA1MDgy",
      number: 13,
      title: "[ADD] Added a feature that will change the industry"
    },
    user: {
      avatar_url: "https://avatars0.githubusercontent.com/u/29494534?v=4",
      login: "chrpete"
    }
  }
};

export const BuildsProvider = props => {
  const [builds, setBuilds] = useState(null);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => setLoading(false), 700);
  // }, []);

  useEffect(() => {
    firebase.getBuilds().then(res => {
      console.log(res);
      setBuilds(res);
    });
  }, []);

  useEffect(() => {
    setLoading(!Boolean(builds));
  }, [builds]);

  return (
    <BuildsContext.Provider value={{ builds, loading }}>
      {props.children}
    </BuildsContext.Provider>
  );
};

export default BuildsContext;
