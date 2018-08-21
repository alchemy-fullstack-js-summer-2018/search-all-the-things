import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { getBook } from '../../services/booksApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';
import styles from './BookDetails.css';
// import striptags from 'striptags';

class BookDetail extends Component {

  state = {
    book: null,
    favorite: null,
    html: null
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
        this.setState({ book: _book, html: { __html: _book.volumeInfo.description } });
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
      addFavorite(book)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { book, favorite, html } = this.state;
    if(!book) return null;

    console.log(book);
    const volumeInfo = book.volumeInfo;

    return (
      <Fragment>
        <article className={styles.bookDetail}>
          <div id='image-div'>
            <p className="fav-button">
              <button onClick={this.handleClick}>
                {favorite ? 'Remove From' : 'Add To'} Favorites
              </button>
            </p>
            {volumeInfo.imageLinks.medium 
              ? <img src={book.volumeInfo.imageLinks.medium}  className="item-c"/>
              : <img src="http://www.moxmultisport.com/wp-content/uploads/no-image.jpg" className="no-image"/>
            }
          </div>
          <div id='info-divs'>
            <h2>{volumeInfo.title}</h2>
            <h4>{volumeInfo.subtitle}</h4>
            <p dangerouslySetInnerHTML={html}></p>
            <p>Written by: {volumeInfo.authors[0]}</p>
            <p>Pages: {volumeInfo.pageCount}</p>
            <p>Rating: {volumeInfo.averageRating}</p>
            <p>Published By: {volumeInfo.publisher}</p>
          </div>
        </article>
      </Fragment>
    );
  }

}

export default BookDetail;