import React, { useEffect, useState } from "react";
import { searchWord } from "../actions";
import { connect } from "react-redux";

import WordSearchResult from "./WordSearchResult";
import Dropdown from './Dropdown';

import styles from "../sass/Search.module.scss";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { searchWord, word, searchResult } = props;
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
    <div>
      <h2 className={styles.formHeader}>
        Search through the dictionary to begin.
      </h2>
      <form className={styles.search} onSubmit={(e) => handleSubmit(e)}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a word..."
        />
      </form>
      {searchResult.length && showResult ? handleSearchResults() : null}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { word: state.word, searchResult: state.searchResult };
};

export default connect(mapStateToProps, { searchWord })(Search);
