import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setUserWord } from "../../actions";

const WordListItemStyle = {
  width: "100%",
  color: "#fff",
  backgroundColor: "#4960c9",
  borderRadius: "5px",
  fontSize: "1rem",
  padding: "1em",
};

const handleLearnMoreClick = (word, setUserWord) => {
  setUserWord(word);
};
const WordListItem = ({ word, setUserWord }) => {
  const currentWord = word.word;
  return (
    <div style={WordListItemStyle}>
      <h3>{currentWord.data[0].meta.id}</h3>
      <p>{currentWord.data[0].hwi.hw}</p>
      <hr />
      {/* <p>"{word.data[0].shortdef[0]}"</p> */}
      <Link to="/user/word">
        <button onClick={() => handleLearnMoreClick(word, setUserWord)}>
          Learn More
        </button>
      </Link>
      <button onClick={() => console.log("clicked")}>
        <i className="lni lni-bookmark"></i>
      </button>
    </div>
  );
};

export default connect(null, { setUserWord })(WordListItem);
