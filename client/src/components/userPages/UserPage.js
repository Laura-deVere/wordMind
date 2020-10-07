import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import WordSearchResult from "../WordSearchResult";
import WordCard from "./WordCard";
import WordList from "./WordList";
import Practice from "./Practice";

import { userPage } from "../../sass/UserPage.module.scss";

const UserPage = ({ isSignedIn, userName, currentWord }) => {
  const [showResult, setShowResult] = useState(true);

  useEffect(() => {
    setShowResult(true);
  }, [currentWord]);

  const setSearchResultVisibility = () => {
    setShowResult(!showResult);
  };

  return (
    <Router>
      <section className="user-main">
        {isSignedIn ? (
          <div className={userPage}>
            <h1>Hello, {userName}</h1>
            {currentWord.length && showResult ? (
              <WordSearchResult updateVisibility={setSearchResultVisibility} />
            ) : null}
            <Switch>
              <Route path="/user/practice">
                <Practice />
              </Route>
              <Route path="/user/word">
                <WordCard />
              </Route>
              <Route path="/user">
                <WordList />
              </Route>
            </Switch>
          </div>
        ) : (
          <div>Must be signed in.</div>
        )}
      </section>
    </Router>
  );
};

const mapStateToProps = (state) => {
  console.log("state from user page", state);
  return {
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userName,
    currentWord: state.searchResult,
  };
};

export default connect(mapStateToProps)(UserPage);
