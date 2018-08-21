import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addFavorite, removeFavorite, getFavorite } from '../../services/favoritesApi';


class Article extends Component {

  state = {
    favorite: null
  };

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.book;
    console.log('***BOOK id***', id);
    
    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { book } = this.props;
    const { favorite } = this.state;
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
    const { book } = this.props;
    const { favorite } = this.state;
    const url = book.selfLink;
    const split = url.split('/');
    const id = split[split.length - 1];

    return (
      <li>
        {book.volumeInfo.imageLinks 
          ? <img src={book.volumeInfo.imageLinks.thumbnail}  className="item-c"/>
          : <p  className="item-c">No image was provided</p>
        }
        <p className="item-a">{book.volumeInfo.title}</p>
        <p className="item-b">{book.volumeInfo.authors}</p>
        <p className="item-d">
          <Link to={`/results/${id}`}>
            View this books info
          </Link>
        </p>
        <p>
          <button onClick={this.handleClick}>
            {favorite ? '♥️' : '♡'} Favorites
          </button>
        </p>
      </li>
    );
  }
}

export default Article;