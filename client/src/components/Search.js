import React, { useEffect, useState } from "react";
import { fetchWord } from "../actions";
import { connect } from "react-redux";

const Search = (props) => {
  const [term, setTerm] = useState("");
  const { fetchWord, word } = props;
  useEffect(() => {
    // console.log(term);
    console.log(word);
  }, [term, word]);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchWord(term);
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

export default connect(mapStateToProps, { fetchWord })(Search);
