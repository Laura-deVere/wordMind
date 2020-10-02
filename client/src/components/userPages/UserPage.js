import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

import Search from "../Search";
import Word from "../Word";
import WordCard from "./WordCard";
import WordList from "./WordList";
import Practice from "./Practice";

import { userPage } from "../../sass/UserPage.module.scss";

const UserPage = ({ isSignedIn, currentWord }) => {
  return (
    <Router>
      <section className="user-main">
        {isSignedIn ? (
          <div className={userPage}>
            Hello User
            <Search />
            {currentWord.length ? <Word /> : null}
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
  return { isSignedIn: state.auth.isSignedIn, currentWord: state.searchResult };
};

export default connect(mapStateToProps)(UserPage);
