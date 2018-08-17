import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Article extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired
  };

  render() {
    const { book } = this.props;
    // if(!book) return null;
    const { title, authors } = book;

    return (
      <li>
        <h4>Your Book:</h4>
        <p>{title}</p>
        <p>{authors}</p>
      </li>
    );
  }
}

export default Article;