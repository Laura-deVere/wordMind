import React from "react";
import Sentence from "./Sentence";

const listStyle = {
  display: "flex",
  flexDirection: "column",
};
const SentenceList = ({ sentences }) => {
  const renderList = () => {
    return sentences.map((sentence, index) => {
      return (
        <li key={index}>
          <Sentence sentence={sentence} />
        </li>
      );
    });
  };
  return <ul style={listStyle}>{renderList()}</ul>;
};
export default SentenceList;
