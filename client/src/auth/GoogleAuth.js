import React, { Component } from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";

import buttonStyles from "../sass/Buttons.module.scss";

class GoogleAuth extends Component {
  // if state is null, no user is signed in
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      // init returns a promise
      window.gapi.client
        .init({
          clientId: `930494171277-1plsgodm6vb6oenoqu2oua2ae1leans0.apps.googleusercontent.com`,
          scope: "email",
        })
        .then(() => {
          // invoked after the library has loaded
          //   auth is an object
          this.auth = window.gapi.auth2.getAuthInstance();
          // update auth state
          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      const name = this.auth.currentUser.get().getBasicProfile().getGivenName();
      const avatarlink = this.auth.currentUser
        .get()
        .getBasicProfile()
        .getImageUrl();
      const id = this.auth.currentUser.get().getId();
      this.props.signIn(id, name, avatarlink);
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button
          className={`${buttonStyles.btn} ${buttonStyles.btn__transparent} ${buttonStyles.btn__small}`}
          onClick={this.onSignOutClick}
        >
          <i className="lni lni-google">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button
          className={`${buttonStyles.btn} ${buttonStyles.btn__transparent} ${buttonStyles.btn__small}`}
          onClick={this.onSignInClick}
        >
          <i className="lni lni-google">Sign In</i>
        </button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
