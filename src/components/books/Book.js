import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Article extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    const url = book.selfLink;
    const split = url.split('/');
    console.log(split);
    const id = split[split.length - 1];

    return (
      <li>
        <h4>Your Book:</h4>
        <p>{book.volumeInfo.title}</p>
        <p>{book.volumeInfo.authors}</p>
        {book.volumeInfo.imageLinks 
          ? <img src={book.volumeInfo.imageLinks.thumbnail}/>
          : <p>No image was provided</p>
        }
        <Link to={`/results/${id}`}>
          View this books info
        </Link>
      </li>
    );
  }
}

export default Article;