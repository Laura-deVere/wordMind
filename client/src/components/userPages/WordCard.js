import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Practice from "./Practice";

import buttonStyles from "../../sass/Buttons.module.scss";
import styles from "../../sass/WordCard.module.scss";

const renderDefintionList = (list) => {
  return list.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <hr />
      </li>
    );
  });
};
const WordCard = ({ currentWord }) => {
  if (currentWord.id) {
    const word = currentWord.word;
    return (
      <div className={styles.wordCard}>
        <h3>{word.data[0].meta.id}</h3>
        <hr />

        <p>{word.data[0].fl}</p>
        <hr />
        <ol>{renderDefintionList(word.data[0].shortdef)}</ol>
        <div className={styles.buttons}>
          <Link
            to="/user"
            className={`${buttonStyles.btn} ${buttonStyles.btn__large} ${buttonStyles.btn__white}`}
          >
            Back
          </Link>
          <Link
            to="/user/practice"
            className={`${buttonStyles.btn} ${buttonStyles.btn__large} ${buttonStyles.btn__white}`}
          >
            Practice
          </Link>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return { currentWord: state.currentWord };
};

export default connect(mapStateToProps)(WordCard);
