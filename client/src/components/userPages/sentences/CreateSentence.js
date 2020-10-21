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
  wordsCompleted
}) => {
  const [sentence, updateSentence] = useState(
    ""
  );

  const word = currentWord.word;
  const wordID = currentWord.id;

  const handleSentenceSave = (word) => {
    const newArr = [sentence];
    const sentences = [...newArr, ...word.sentences];
    updateSentence("");
    createSentence(sentences, currentWordID, currentUserID, wordsCompleted);
  };

  return (
    <div>
      <h3>{wordID}</h3>
      <div className={styles.form}>
        {currentWord && !word.completed ? (
          <>
            <textarea
              placeholder="Write something and press save!"
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
    wordsCompleted: state.auth.wordsCompleted
  };
};

export default connect(mapStateToProps, { createSentence })(CreateSentence);
