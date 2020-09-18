import React, { useEffect, useState } from "react";
import { searchWord } from "../actions";
import { connect } from "react-redux";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { searchWord, word } = props;
  useEffect(() => {
    // console.log(term);
    console.log(word);
  }, [term, word]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchWord(term);
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
