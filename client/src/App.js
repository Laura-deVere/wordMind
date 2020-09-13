import React from "react";
import Nav from "./components/Nav";
import "./App.scss";
import Blurb from "./components/Blurb";
import Search from "./components/Search";
import Word from "./components/Word";

function App() {
  return (
    <div className="App">
      <Nav />
      <Blurb />
      <Search />
      <Word />
    </div>
  );
}

export default App;
