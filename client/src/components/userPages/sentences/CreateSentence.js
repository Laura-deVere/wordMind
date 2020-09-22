import React, { useEffect, useState } from "react";
import { updateWord } from "../../../actions";
import { connect } from "react-redux";
import SentenceList from "./SentenceList";

const CreateSentence = ({ currentWordID, updateWord, currentWord }) => {
  const [sentence, updateSentence] = useState(
    "Write something and press save!"
  );
  useEffect(() => {});

  const handleSentenceSave = () => {
    const newArr = [sentence];
    const updates = {};
    updates[currentWordID] = {
      data: currentWord.data.data,
      userID: currentWord.data.userID,
      sentences: [...currentWord.data.sentences, ...newArr],
    };
    updateWord(updates);
  };

  return (
    <div>
      <div>
        {currentWord.data.sentences.length > 11 ? (
          <>
            <input
              value={sentence}
              onChange={(e) => updateSentence(e.target.value)}
            />
            <button onClick={() => handleSentenceSave()}>Save</button>
          </>
        ) : (
          <p>All done. 100% Complete.</p>
        )}
      </div>
      <SentenceList sentences={currentWord.data.sentences} />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log("current word", state.currentWord.id);
  return {
    currentWordID: state.currentWord.id,
    currentWord: state.currentWord,
  };
};

export default connect(mapStateToProps, { updateWord })(CreateSentence);
