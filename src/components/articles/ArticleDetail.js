/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../../services/newsApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Article extends Component {

  state = {
    movie: null,
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getMovies(id)
      .then(movie => {
        this.setState({ movie });
      })
      .catch(console.log);

    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { movie, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(movie.imdbID)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.movie)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { movie, favorite } = this.state;
    if(!movie) return null;

    const { Title, Poster, Year, Plot } = movie;

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