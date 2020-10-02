import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import UserPage from "./components/userPages/UserPage";
import "./App.scss";
import ActionButtons from "./components/ActionButtons";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/user">
            <UserPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <ActionButtons />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
