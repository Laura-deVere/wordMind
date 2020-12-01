import React from "react";
import { connect } from "react-redux";
import GoogleAuth from "../auth/GoogleAuth";
import Avatar from "./Avatar";
const ActionsButtons = ({ isSignedIn }) => {
  return (
    <div className="action-buttons">
      
      {isSignedIn ? <Avatar /> : <h4>Sign in with Google to get started.</h4>}
      <GoogleAuth />
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps)(ActionsButtons);
