import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchWords } from "../../actions";
import Search from "../Search";
import Pagination from "../Pagination";
import WordListItem from "./WordListItem";

class WordList extends Component {
  state = {
    currentPage: 1,
    itemsPerPage: 6,
    wordListLength: this.props.words.length,
  };

  componentDidMount() {
    this.props.fetchWords(this.props.currentUserID);
    // this.setState({ wordListLength: this.props.words.length });
    // console.log(this.state);
  }

  componentDidUpdate() {
    // this.props.fetchWords(this.props.cursrentUserID);
  }

  renderList(currentItems) {
    return currentItems.map((word) => {
      return (
        <li key={word.id}>
          <WordListItem word={word} />
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
        <Search />
        <h4>Your saved words</h4>
        <ul>{this.renderList(currentItems)}</ul>
        <Pagination
          itemsPerPage={this.state.itemsPerPage}
          totalItems={this.state.wordListLength}
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
