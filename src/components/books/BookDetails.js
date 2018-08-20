import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getBook } from '../../services/booksApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

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

    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { book, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(book.id)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.book)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
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
          {favorite ? 'Remove From' : 'Add To'} Favorites
        </button>
      </article>
    );
  }

}

export default BookDetail;