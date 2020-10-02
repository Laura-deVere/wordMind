import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import CreateSentence from "./sentences/CreateSentence";

import buttonStyles from "../../sass/Buttons.module.scss";
import styles from "../../sass/Sentences.module.scss";

const Practice = ({ currentWord }) => {
  return (
    <div className={styles.practice}>
      <h3>Write something to begin</h3>
      {Object.keys(currentWord).length > 0 ? (
        <>
          <CreateSentence />

          <Link to="/user/word">
            <button
              className={`${buttonStyles.btn} ${buttonStyles.btn__large} ${buttonStyles.btn__white}`}
            >
              Back
            </button>
          </Link>
        </>
      ) : (
        <>
          <p>Whoops Something went wrong, click back to continue</p>
          <Link to="/user">
            <button
              className={`${buttonStyles.btn} ${buttonStyles.btn__large} ${buttonStyles.btn__white}`}
            >
              Back to words
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentWord: state.currentWord };
};
export default connect(mapStateToProps)(Practice);
