import React from "react";
import Sentence from "./Sentence";

import styles from "../../../sass/Sentences.module.scss";

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
  return <ul className={styles.sentenceList}>{renderList()}</ul>;
};
export default SentenceList;
