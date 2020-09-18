import React from "react";
import { connect } from "react-redux";

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
  console.log("What is ??", currentWord);
  if (Object.keys(currentWord).length > 0) {
    return (
      <div>
        <h3>{currentWord.data[0].meta.id}</h3>
        <p>{currentWord.data[0].fl}</p>
        <ol>{renderDefintionList(currentWord.data[0].shortdef)}</ol>
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
