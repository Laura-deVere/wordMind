import React from "react";
import GoogleAuth from "../auth/GoogleAuth";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

import { nav } from "../sass/Header.module.scss";
import Avatar from "./Avatar";

const Header = ({ isSignedIn }) => {
  return (
    <nav className={nav}>
      <Link to="/">
        <img src={logo} alt="wordmind logo" />
      </Link>
      <ul>
        {isSignedIn ? (
          <li>
            <Avatar />
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
