import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUserWord, deleteWord } from "../../actions";

import buttonStyles from "../../sass/Buttons.module.scss";
import styles from "../../sass/WordListItem.module.scss";

const WordListItem = ({ word, setUserWord, currentUserID, deleteWord }) => {
  const currentWord = word.word;
  const wordID = word.id;

  const handleLearnMoreClick = (word, setUserWord, currentUserID) => {
    setUserWord(word.id, currentUserID);
  };

  return (
    <div className={styles.listitem}>
      <h3>{wordID}</h3>
      <p>{currentWord.data[0].hwi.hw}</p>
      <hr />
      <div className={styles.buttons}>
        <Link to="/user/word">
          <button
            className={`${buttonStyles.btn} ${buttonStyles.btn__medium} ${buttonStyles.btn__blue} `}
            onClick={() =>
              handleLearnMoreClick(word, setUserWord, currentUserID)
            }
          >
            Learn More
          </button>
        </Link>
        <button
          className={`${buttonStyles.bookmark} ${buttonStyles.bookmark__saved}`}
          onClick={() => {
            deleteWord(word, wordID, currentUserID);
          }}
        >
          <i className="lni lni-cross-circle"></i>
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUserID: state.auth.userId };
};

export default connect(mapStateToProps, { setUserWord, deleteWord })(
  WordListItem
);
