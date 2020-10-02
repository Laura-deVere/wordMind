import React, { useState } from "react";
import { createSentence } from "../../../actions";
import { connect } from "react-redux";
import SentenceList from "./SentenceList";

import styles from "../../../sass/Sentences.module.scss";
import buttonStyles from "../../../sass/Buttons.module.scss";

const CreateSentence = ({
  currentWordID,
  createSentence,
  currentWord,
  currentUserID,
}) => {
  const [sentence, updateSentence] = useState(
    "Write something and press save!"
  );

  const word = currentWord.word;

  const handleSentenceSave = (word) => {
    const newArr = [sentence];
    const sentences = [...word.sentences, ...newArr];
    updateSentence("");
    createSentence(sentences, currentWordID, currentUserID);
  };

  return (
    <div>
      <div className={styles.form}>
        {currentWord && word.sentences.length < 11 ? (
          <>
            <input
              value={sentence}
              onChange={(e) => updateSentence(e.target.value)}
            />
            <button
              className={`${buttonStyles.btn} ${buttonStyles.btn__blue} ${buttonStyles.btn__large}`}
              onClick={() => handleSentenceSave(word)}
            >
              Save
            </button>
          </>
        ) : (
          <p>All done. 100% Complete.</p>
        )}
      </div>
      <SentenceList sentences={word.sentences} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentWordID: state.currentWord.id,
    currentWord: state.currentWord,
    currentUserID: state.auth.userId,
  };
};

export default connect(mapStateToProps, { createSentence })(CreateSentence);
