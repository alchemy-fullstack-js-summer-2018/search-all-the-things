import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBook } from '../../services/booksApi';

class BookDetail extends Component {

  state = {
    book: null,
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    console.log('***ID***', id);
    getBook(id)
      .then(_book => {
        console.log('***BOOK***', _book);
        this.setState({ book: _book });
      })
      .catch(console.log);
  }

  render() {
    const { book } = this.state;
    if(!book) return null;

    console.log(book);
    const volumeInfo = book.volumeInfo;

    return (
      <article>
        <h2>{volumeInfo.title}</h2>
        <img src={volumeInfo.imageLinks.medium}/>
      </article>
    );
  }

}

export default BookDetail;