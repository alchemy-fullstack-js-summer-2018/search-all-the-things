import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { addFavorite, removeFavorite, getFavorite } from '../../services/favoritesApi';
import StarRatingComponent from 'react-star-rating-component';
/* Star Rating Component created by voronianski https://github.com/voronianski/react-star-rating-component */


class Article extends Component {
  
  state = {
    favorite: null,
    rating: 1
  };

  static propTypes = {
    book: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { id } = this.props.book;
    
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
        <Link to={`/results/${id}`}>
          {book.volumeInfo.imageLinks 
            ? <img src={book.volumeInfo.imageLinks.thumbnail}  className="item-c"/>
            : <img src="http://www.moxmultisport.com/wp-content/uploads/no-image.jpg" className="no-image"/>
          }
          {book.volumeInfo.title ? <p className="title">{book.volumeInfo.title}</p> : <p>No title provided</p>}
        </Link>

        {book.volumeInfo.authors
          ? <p>{book.volumeInfo.authors[0]}</p>
          : <p>{book.volumeInfo.authors}</p>
        }
        <div>
          <StarRatingComponent
            name="rate1"
            starCount={5}
            value={book.volumeInfo.averageRating}
          />
        </div>
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