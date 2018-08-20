/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../../services/newsApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Article extends Component {

  state = {
    pokemon: null,
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDimdbIDMount() {
    const { imdbID } = this.props.match.params;
    getMovies(imdbID)
      .then(movie => {
        this.setState({ movie });
      })
      .catch(console.log);

    getFavorite(imdbID)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { article, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(article.imdbID)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.article)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { article, favorite } = this.state;
    if(!article) return null;

    const { Title, Poster, Year, Plot } = article;

    return (
      <div>
        <img src={Poster}/>
        <h2>{Title} ({Year})</h2>
        <p>{Plot}</p>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove from' : 'Add to' } Favorites
        </button>
      </div>
    );
  }
}