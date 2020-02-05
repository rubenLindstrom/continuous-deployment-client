import React, { useEffect } from "react";

import { useBuilds } from "./util/hooks";

// Components

const App = () => {
  const builds = useBuilds();
  useEffect(() => console.log(builds), [builds]);

  return (
    <>
      <h1></h1>
    </>
  );
};

export default App;
