import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBook } from '../../services/booksApi';
import { addFavorite } from '../../services/favoritesApi';

class BookDetail extends Component {

  state = {
    book: null,
    favorite: null
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

  handleClick = () => {
    const { book } = this.state;
    
    addFavorite(this.state.book)
      .then(favorite => {
        this.setState({ favorite })
      })
      .catch(console.log);
  };

  render() {
    const { book, favorite } = this.state;
    if(!book) return null;

    console.log(book);
    const volumeInfo = book.volumeInfo;

    return (
      <article>
        <h2>{volumeInfo.title}</h2>
        <img src={volumeInfo.imageLinks.medium}/>
        <button onClick={this.handleClick}>
          Favorites
        </button>
      </article>
    );
  }

}

export default BookDetail;