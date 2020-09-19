import React, { useEffect, useState } from "react";
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
  const [showPractice, setShowPractice] = useState(false);

  if (Object.keys(currentWord).length > 0) {
    return (
      <div>
        <h3>{currentWord.data.data[0].meta.id}</h3>
        <hr />
        {!showPractice ? (
          <>
            <p>{currentWord.data.data[0].fl}</p>
            <hr />
            <ol>{renderDefintionList(currentWord.data.data[0].shortdef)}</ol>
            <button onClick={() => setShowPractice(true)}>Practice</button>
          </>
        ) : (
          <Practice closePractice={setShowPractice} />
        )}
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
