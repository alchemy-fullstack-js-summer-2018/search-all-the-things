import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;

    return (
      <li>
        <h4>Your Book:</h4>
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
        {book.volumeInfo.imageLinks 
          ? <img src={book.volumeInfo.imageLinks.thumbnail}/>
          : <p>No image was provided</p>
        }
      </li>
    );
  }
}

export default Article;