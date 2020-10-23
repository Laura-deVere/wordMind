import React, { useState } from "react";
import { searchWord } from "../actions";
import { connect } from "react-redux";

import WordSearchResult from "./WordSearchResult";
import Dropdown from './Dropdown';

import styles from "../sass/Search.module.scss";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { searchWord, searchResult } = props;
  const [showResult, setShowResult] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord(term);
    setTerm("");
  };

  const handleDropDownClick = (word) => {
    searchWord(word);
  }

  const handleSearchResults = () => {
      if (!searchResult[0].meta) {
        return <Dropdown list={searchResult} handleDropDownClick={handleDropDownClick} />
      } else {
        return <WordSearchResult updateVisibility={setShowResult} />
      }
  }

  return (
    <>
      <form className={styles.search} onSubmit={(e) => handleSubmit(e)}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search through the dictionary to begin."
        />
      </form>
      {searchResult.length && showResult ? handleSearchResults() : null}
    </>
  );
};

const mapStateToProps = (state) => {
  return { word: state.word, searchResult: state.searchResult };
};

export default connect(mapStateToProps, { searchWord })(Search);
