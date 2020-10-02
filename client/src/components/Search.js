import React, { useEffect, useState } from "react";
import { searchWord } from "../actions";
import { connect } from "react-redux";

import styles from "../sass/Search.module.scss";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { searchWord, word } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord(term);
    setTerm("");
  };
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
    </div>
  );
};

const mapStateToProps = (state) => {
  return { word: state.word };
};

export default connect(mapStateToProps, { searchWord })(Search);
