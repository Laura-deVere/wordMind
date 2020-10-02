import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "../auth/GoogleAuth";
import buttonStyles from "../sass/Buttons.module.scss";
import Avatar from "./Avatar";
const ActionsButtons = ({ isSignedIn }) => {
  return (
    <div className="action-buttons">
      <h4>Sign up to get started.</h4>
      {isSignedIn ? <Avatar /> : null}
      <GoogleAuth />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps)(ActionsButtons);
