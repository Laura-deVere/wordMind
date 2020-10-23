import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWords } from "../../actions";

import Pagination from "../Pagination";
import WordListItem from "./WordListItem";

import { wordList } from "../../sass/UserPage.module.scss";

class WordList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 6,
  };

  componentDidMount() {
    this.props.fetchWords(this.props.currentUserID);
  }

  renderList(currentItems) {
    return currentItems.map((word) => {
      return (
        <li key={word.id}>
          <WordListItem word={word}/>
        </li>
      );
    });
  }

  paginate(number) {
    this.setState({ currentPage: number });
  }

  render() {
    const indexOfLastItem = this.state.currentPage * this.state.itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - this.state.itemsPerPage;
    const currentItems = this.props.words.slice(
      indexOfFirstItem,
      indexOfLastItem
    );
    return (
      <>
        <h4>Saved words</h4>
        <ul className={wordList}>{this.renderList(currentItems)}</ul>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.props.words.length}
          paginate={this.paginate.bind(this)}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { words: state.words, currentUserID: state.auth.userId };
};

export default connect(mapStateToProps, { fetchWords })(WordList);
