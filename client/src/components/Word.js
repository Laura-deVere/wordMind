import React, { useState } from "react";
import { connect } from "react-redux";
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

const Word = ({ isSignedIn, word }) => {
  const [audioURL, setAudioURL] = useState("");
  const [play] = useSound(audioURL);
  let newURL = URLHelper(word[0].hwi.prs);
  let currentWord = word[0].meta.id;
  currentWord = currentWord.replace(/[^a-zA-Z]/g, "");

  const resetURLAndPlay = () => {
    //   handle constant rerender, only update when ready
    setAudioURL(newURL);
    play();
  };

  return (
    <div>
      <h3>{currentWord}</h3>
      <button onClick={resetURLAndPlay}>
        <ion-icon name="megaphone"></ion-icon>
      </button>
      {isSignedIn ? <i className="lni lni-bookmark"></i> : null}

      <button>Learn More</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn, word: state.word };
};

export default connect(mapStateToProps)(Word);
