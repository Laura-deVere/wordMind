import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUserWord } from "../../actions";

import buttonStyles from "../../sass/Buttons.module.scss";
import styles from "../../sass/WordListItem.module.scss";

const handleLearnMoreClick = (word, setUserWord, currentUserID) => {
  setUserWord(word.id, currentUserID);
};
const WordListItem = ({ word, setUserWord, currentUserID }) => {
  const currentWord = word.word;
  return (
    <div className={styles.listitem}>
      <h3>{currentWord.data[0].meta.id}</h3>
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
          onClick={() => console.log("clicked")}
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

export default connect(mapStateToProps, { setUserWord })(WordListItem);
