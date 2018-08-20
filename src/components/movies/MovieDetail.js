/* eslint no-console: off */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getMovies } from '../../services/omdbApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';
import styles from './MovieDetail.css';

export default class Movie extends Component {

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

    const { Title, Poster, Year, Plot, Runtime, Director, Actors } = movie;

    return (
      <div className={styles.movieDetail}>
        <img src={Poster}/>
        <h2>{Title}</h2>
        <p><strong>Released:</strong> {Year}</p>
        <p><strong>Runtime:</strong> {Runtime}</p>
        <p><strong>Director:</strong> {Director}</p>
        <p><strong>Actors:</strong> {Actors}</p>
        <p><strong>Synopsis:</strong> {Plot}</p>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove from' : 'Add to' } Favorites
        </button>
      </div>
    );
  }
}