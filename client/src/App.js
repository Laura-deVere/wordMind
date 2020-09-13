import React from "react";
import { connect } from "react-redux";
import Nav from "./components/Nav";
import "./App.scss";
import Blurb from "./components/Blurb";
import Search from "./components/Search";
import Word from "./components/Word";

function App({ currentWord }) {
  return (
    <div className="App">
      <Nav />
      <Blurb />
      <Search />
      {currentWord.length ? <Word /> : null}
    </div>
  );
}

const mapStateToProps = (state) => {
  return { currentWord: state.word };
};
export default connect(mapStateToProps)(App);
