import React from "react";
import Nav from "./components/Nav";
import "./App.scss";
import Blurb from "./components/Blurb";

const FAKE_API_KEY = process.env.REACT_APP_API_KEY;

console.log(FAKE_API_KEY);
function App() {
  return (
    <div className="App">
      <Nav />
      <Blurb />
    </div>
  );
}

export default App;
