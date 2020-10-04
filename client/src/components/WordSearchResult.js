import React, { useState } from "react";
import { connect } from "react-redux";
import { createWord } from "../actions";
import useSound from "use-sound";

import buttonStyles from "../sass/Buttons.module.scss";
import styles from "../sass/SearchResult.module.scss";

const URLHelper = (pronunciation) => {
  const alaphabet = "abcdefghijklmnopqrstuvwxyz";
  let audio = pronunciation[0].sound.audio;
  let subDirectory;
  let baseFilename = audio;
  if (audio.startsWith("bix")) {
    subDirectory = "bix";
  } else if (audio.startsWith("gg")) {
    subDirectory = "gg";
  } else if (alaphabet.indexOf(audio) !== -1) {
    subDirectory = "number";
  } else {
    subDirectory = audio[0];
  }
  let url = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subDirectory}/${baseFilename}.mp3`;
  return url;
};

const WordSearchResult = ({
  currentUserID,
  isSignedIn,
  searchResult,
  createWord,
  updateVisibility,
}) => {
  const [audioURL, setAudioURL] = useState("");
  const [play] = useSound(audioURL);
  let currentWord = searchResult[0].meta.id;
  currentWord = currentWord.replace(/[^a-zA-Z]/g, "");

  const resetURLAndPlay = () => {
    //   handle constant rerender, only update when ready
    if (searchResult[0].hwi.prs) {
      let newURL = URLHelper(searchResult[0].hwi.prs);
      setAudioURL(newURL);
    }

    play();
  };

  const saveWord = () => {
    const wordObj = {
      data: { ...searchResult },
      sentences: ["Write something to get started!"],
    };
    createWord(currentWord, wordObj, currentUserID);
  };

  return (
    <div className={styles.word}>
      <div className={styles.word__header}>
        <h3>{currentWord.toUpperCase()}</h3>
        <button
          className="mega-phone mega-phone--white"
          onClick={resetURLAndPlay}
        >
          <ion-icon name="megaphone"></ion-icon>
        </button>
        <button
          className={`${buttonStyles.close} ${buttonStyles.close__saved}`}
          onClick={() => updateVisibility()}
        >
          <i className="lni lni-cross-circle"></i>
        </button>
      </div>
      <div>
        <p>{searchResult[0].shortdef}</p>
      </div>
      {isSignedIn ? (
        <button className={buttonStyles.bookmark} onClick={() => saveWord()}>
          <i className="lni lni-bookmark"></i>
        </button>
      ) : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    currentUserID: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    searchResult: state.searchResult,
  };
};

export default connect(mapStateToProps, { createWord })(WordSearchResult);
