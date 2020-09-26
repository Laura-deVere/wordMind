import React, { useState } from "react";
import { connect } from "react-redux";
import { createWord } from "../actions";
import useSound from "use-sound";

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

const Word = ({ currentUserID, isSignedIn, searchResult, createWord }) => {
  const [audioURL, setAudioURL] = useState("");
  const [play] = useSound(audioURL);
  let newURL = URLHelper(searchResult[0].hwi.prs);
  let currentWord = searchResult[0].meta.id;
  currentWord = currentWord.replace(/[^a-zA-Z]/g, "");

  const resetURLAndPlay = () => {
    //   handle constant rerender, only update when ready
    setAudioURL(newURL);
    play();
  };

  const saveWord = () => {
    const wordObj = {
      data: { ...searchResult },
      sentences: ["Write something to get started!"],
    };
    console.log("----------------------------", wordObj);
    createWord(wordObj, currentUserID);
  };

  return (
    <div>
      <h3>{currentWord}</h3>
      <button onClick={resetURLAndPlay}>
        <ion-icon name="megaphone"></ion-icon>
      </button>
      {isSignedIn ? (
        <button onClick={() => saveWord()}>
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

export default connect(mapStateToProps, { createWord })(Word);
