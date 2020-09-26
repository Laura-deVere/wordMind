import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Practice from "./Practice";

const renderDefintionList = (list) => {
  return list.map((item, index) => {
    return (
      <li key={index}>
        {item}
        <hr />
      </li>
    );
  });
};
const WordCard = ({ currentWord }) => {
  if (currentWord.id) {
    const word = currentWord.word;
    console.log("current word", word);
    return (
      <div>
        <h3>{word.data[0].meta.id}</h3>
        <hr />

        <p>{word.data[0].fl}</p>
        <hr />
        <ol>{renderDefintionList(word.data[0].shortdef)}</ol>
        <Link to="/user">Back</Link>
        <Link to="/user/practice">Practice</Link>
      </div>
    );
  } else {
    return null;
  }
};

const mapStateToProps = (state) => {
  return { currentWord: state.currentWord };
};

export default connect(mapStateToProps)(WordCard);
