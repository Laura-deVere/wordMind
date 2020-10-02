import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "../auth/GoogleAuth";
import buttonStyles from "../sass/Buttons.module.scss";
const ActionsButtons = ({ isSignedIn }) => {
  return (
    <ul className="action-buttons">
      {isSignedIn ? (
        <li>
          <Link to="/user">
            <button
              className={`${buttonStyles.btn} ${buttonStyles.btn__white} ${buttonStyles.btn__small}`}
            >
              <i className="lni lni-user"></i>
            </button>
          </Link>
        </li>
      ) : null}
      <li>
        <GoogleAuth />
      </li>
    </ul>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps)(ActionsButtons);
