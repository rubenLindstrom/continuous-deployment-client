import React, { useEffect } from "react";

import { useBuilds } from "./util/hooks";

// Components
import Nav from "./components/nav";

const App = () => {
  const builds = useBuilds();
  useEffect(() => console.log(builds), [builds]);

  return (
    <>
      <Nav />
      <h1></h1>
    </>
  );
};

export default App;
