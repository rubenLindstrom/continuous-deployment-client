import { useContext } from "react";

import BuildsContext from "./buildsContext";

export const useBuilds = () => {
  const builds = useContext(BuildsContext);
  return builds;
};
