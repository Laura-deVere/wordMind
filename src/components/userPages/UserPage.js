import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { connect } from "react-redux";

import WordCard from "./WordCard";
import WordList from "./WordList";
import Practice from "./Practice";
import Quiz from './Quiz';
import Stats from "./Stats";
import Search from "../Search";

import { userPage, header, sideLeft, sideRight, userContent } from "../../sass/UserPage.module.scss";

const UserPage = ({ isSignedIn, userName, currentWord }) => {
  return (
    <Router>
      <section className="user-main">
        {isSignedIn ? (
          <div className={userPage}>
            <div className={sideLeft}>
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
            </div>
            <div className={userContent}>

        <Search />
              <div className={header}>
                <h1>Hello, {userName}</h1>
              </div>
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
            <div className={sideRight}>
              <Stats />
            </div>
          </div>
        ) : (
          <div>Must be signed in.</div>
        )}
      </section>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn,
    userName: state.auth.userName,
    currentWord: state.searchResult,
  };
};

export default connect(mapStateToProps)(UserPage);
