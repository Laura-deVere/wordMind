import React, { Component } from "react";
import { signIn, signOut } from "../actions";
import { connect } from "react-redux";
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
      // gapi.auth2
      //   .getAuthInstance()
      //   .currentUser.get()
      //   .getBasicProfile()
      //   .getGivenName();
      // const name = this.auth.currentUser.get().getBasicProfile().getGivenName();

      const id = this.auth.currentUser.get().getId();
      // const profile = { name: name, id: id };
      this.props.signIn(this.auth.currentUser.get().getId());
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
    // console.log(this.props);
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick}>
          <i className="lni lni-google">Sign Out</i>
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick}>
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
  console.log(state.auth);
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
