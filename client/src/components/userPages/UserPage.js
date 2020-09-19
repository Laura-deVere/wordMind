/** @jsx jsx */
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { jsx, css } from "@emotion/core";
import { connect } from "react-redux";

import Search from "../Search";
import Word from "../Word";
import WordCard from "./WordCard";
import WordList from "./WordList";

const UserPage = ({ isSignedIn, currentWord }) => {
  return (
    <Router>
      {isSignedIn ? (
        <div
          css={css`
            width: 60%;
            margin: 0 auto;
            border: 1px solid #bec0c4;
            border-radius: 5px;
            position: absolute;
            left: 20%;
            top: 222px;
            color: #484c54;
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 0 1em;
            -webkit-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
            -moz-box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
            box-shadow: 4px 3px 19px 5px rgba(72, 76, 84, 0.67);
            @media (max-width: 420px) {
              width: 90%;
            }
          `}
        >
          Hello User
          <Search />
          {currentWord.length ? <Word /> : null}
          <Switch>
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
    </Router>
  );
};

const mapStateToProps = (state) => {
  console.log("state from user page", state);
  return { isSignedIn: state.auth.isSignedIn, currentWord: state.searchResult };
};

export default connect(mapStateToProps)(UserPage);
