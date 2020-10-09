import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import style from "../sass/Avatar.module.scss";

const Avatar = ({ avatarLink }) => {
  return (
    <Link to="/user">
      <img className={style.avatar} src={avatarLink} alt="avatar" />
    </Link>
  );
};

const mapStateToProps = (state) => {
  return { avatarLink: state.auth.avatarLink };
};
export default connect(mapStateToProps)(Avatar);
