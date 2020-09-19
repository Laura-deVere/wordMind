import React from "react";
import Sentence from "./Sentence";

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
  return <ul>{renderList()}</ul>;
};
export default SentenceList;
