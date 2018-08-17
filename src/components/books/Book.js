import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    // if(!book) return null;
    // const { title, authors } = book;

    return (
      <li>
        <h4>Your Book:</h4>
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
        <img src={book.volumeInfo.imageLinks.thumbnail}/>
      </li>
    );
  }
}

export default Article;