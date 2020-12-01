import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import DefintionList from './DefinitionList';

import buttonStyles from "../../sass/Buttons.module.scss";
import styles from "../../sass/WordCard.module.scss";


const WordCard = ({ currentWord }) => {
  if (currentWord.id) {
    const word = currentWord.word;
    const wordDefinition = currentWord.word.data;
    const wordID = currentWord.id;
    return (
      <div className={styles.wordCard}>
        <h3>{wordID}</h3>
        <hr />
        <DefintionList list={wordDefinition} />
        
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
