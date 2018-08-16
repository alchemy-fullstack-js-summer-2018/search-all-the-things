import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class Books extends Component {

  // static propTypes = {
  //   books: PropTypes.arrayOf(Object)
  // };

  render() {
    // const { books } = this.props;

    return (
      <ul>
        <h3>Books Component</h3>
        {/* {books.map((book, i) => (
          <Book key={i} book={book}/>
        ))} */}
      </ul>
    );
  }
}

export default Books;