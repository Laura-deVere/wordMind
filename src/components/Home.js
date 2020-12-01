import React from "react";
import Blurb from "./Blurb";
import Greeting from "./Greeting";
const Home = () => {
  return (
    <div className="main">
      <Greeting />
      <Blurb />
    </div>
  );
};

export default Home;
