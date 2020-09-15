import React from "react";
import { connect } from "react-redux";
import Blurb from "./Blurb";
import Greeting from "./Greeting";
const Home = ({ currentWord }) => {
  return (
    <>
      <Greeting />
      <Blurb />
    </>
  );
};

const mapStateToProps = (state) => {
  return { currentWord: state.word };
};

export default connect(mapStateToProps)(Home);
