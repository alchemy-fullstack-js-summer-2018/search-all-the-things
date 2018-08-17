import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import styles from './Books.css';


class Books extends Component {

  static propTypes = {
    books: PropTypes.arrayOf(Object)
  };

  render() {
    const { books } = this.props;
    if(!books) return null;

    return (
      <ul className={styles.books}>
        {books.map((book, i) => (
          <Book key={i} book={book}/>
        ))}
      </ul>
    );
  }
}

export default Books;