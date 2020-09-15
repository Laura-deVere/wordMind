import React from "react";
import { connect } from "react-redux";

const UserPage = ({ isSignedIn }) => {
  return (
    <>{isSignedIn ? <div>Hello User</div> : <div>Must be signed in.</div>}</>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(UserPage);
