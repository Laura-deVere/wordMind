import React from "react";
/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import GoogleAuth from "../auth/GoogleAuth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Header = ({ isSignedIn }) => {
  console.log(isSignedIn);
  return (
    <nav
      css={css`
        font-size: 1.5em;
        color: #fff;
        background-color: #4960c9;
        height: 250px;
        letter-spacing: 1px;
        margin: 0;
        padding: 0.5em;
        width: 100%;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      `}
    >
      <Link to="/">
        <img
          src={logo}
          alt="wordmind logo"
          css={css`
            width: 100px;
            height: auto;
          `}
        />
      </Link>
      <ul
        css={css`
          font-size: 1.5em;
          color: #fff;
          margin: 0;
          width: 175px;
          display: flex;
          align-items: flex-start;
          list-style: none;
        `}
      >
        {isSignedIn ? (
          <li>
            <Link to="/user">
              <button>
                <i className="lni lni-user"></i>
              </button>
            </Link>
          </li>
        ) : null}
        <li>
          <GoogleAuth />
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps)(Header);
