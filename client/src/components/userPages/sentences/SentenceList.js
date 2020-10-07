import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Sentence from "./Sentence";
import Pagination from "../../Pagination";

import styles from "../../../sass/Sentences.module.scss";

const SentenceList = ({ sentences }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [sentencesLength, setSentencesLength] = useState(sentences.length);

  useEffect(() => {
    setSentencesLength(sentences.length);
  }, [sentences]);

  const paginate = (number) => {
    setCurrentPage(number);
  };

  const renderList = () => {
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sentences.slice(indexOfFirstItem, indexOfLastItem);
    return currentItems.map((sentence, index) => {
      return (
        <li key={index}>
          <Sentence sentence={sentence} paginate={paginate} />
        </li>
      );
    });
  };
  return (
    <>
      <ul className={styles.sentenceList}>{renderList()}</ul>
      <Pagination
        paginate={paginate}
        itemsPerPage={itemsPerPage}
        totalItems={sentencesLength}
      />
    </>
  );
};

const mapStateToProps = (state) => {
  console.log("sentences", state.currentWord.word.sentences);
  return {
    sentences: state.currentWord.word.sentences,
  };
};
export default connect(mapStateToProps)(SentenceList);
