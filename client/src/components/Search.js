import React, { useEffect, useState } from "react";
import { searchWord } from "../actions";
import { connect } from "react-redux";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { searchWord, word } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord(term);
    setTerm("");
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input value={term} onChange={(e) => setTerm(e.target.value)} />
    </form>
  );
};

const mapStateToProps = (state) => {
  return { word: state.word };
};

export default connect(mapStateToProps, { searchWord })(Search);
