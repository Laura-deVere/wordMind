import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchWords } from "../../actions";
import Pagination from "../Pagination";
import WordListItem from "./WordListItem";

class WordList extends Component {
  state = { currentPage: 1, itemsPerPage: 6 };

  componentDidMount() {
    this.props.fetchWords(this.props.currentUserID);
  }

  renderList(currentItems) {
    return currentItems.map((word) => {
      return (
        <li key={word.id} style={{ width: "35%" }}>
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
    console.log(currentItems);
    return (
      <>
        <ul>{this.renderList(currentItems)}</ul>
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
