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
  const wordID = currentWord.id;

  const handleSentenceSave = (word) => {
    const newArr = [sentence];
    const sentences = [...newArr, ...word.sentences];
    updateSentence("");
    createSentence(sentences, currentWordID, currentUserID);
  };

  return (
    <div>
      <h3>{wordID}</h3>
      <div className={styles.form}>
        {currentWord && word.sentences.length < 11 ? (
          <>
            <textarea
              maxLength="300"
              row="4"
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
      <SentenceList />
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
