import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchWords } from "../../actions";
import WordListItem from "./WordListItem";

class WordList extends Component {
  componentDidMount() {
    this.props.fetchWords(this.props.currentUserID);
  }

  renderList() {
    return this.props.words.map((word) => {
      return (
        <li key={word.id} style={{ width: "35%" }}>
          <WordListItem word={word} />
        </li>
      );
    });
  }
  render() {
    return <ul>{this.renderList()}</ul>;
  }
}

const mapStateToProps = (state) => {
  return { words: state.words, currentUserID: state.auth.userId };
};

export default connect(mapStateToProps, { fetchWords })(WordList);
