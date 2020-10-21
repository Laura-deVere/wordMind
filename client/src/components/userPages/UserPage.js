import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import WordCard from "./WordCard";
import WordList from "./WordList";
import Practice from "./Practice";
import Quiz from './Quiz';
import Stats from "./Stats";

import { userPage, header } from "../../sass/UserPage.module.scss";

const UserPage = ({ isSignedIn, userName, currentWord }) => {
  return (
    <Router>
      <section className="user-main">
        {isSignedIn ? (
          <div className={userPage}>
            <div className={header}>
            <Link
            to="/user">
              <button>
                <i className="lni lni-home"></i>
                Home
              </button>
            </Link>
            <Link to="/user/quiz">
              <button>
                <i className="lni lni-clipboard"></i>
                Quiz
              </button>
            </Link>
            <h1>Hello, {userName}</h1>
            </div>
            <Stats />
            <Switch>
              <Route path="/user/quiz">
                <Quiz />
              </Route>
              <Route path="/user/practice">
                <Practice />
              </Route>
              <Route path="/user/word">
                <WordCard />
              </Route>
              <Route path="/user">
                <WordList/>
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
