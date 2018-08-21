import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Favorite.css';

export default class Movie extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { imdbID, Title, Poster } = movie;

    return (
      <div>
        <li className={styles.favorite}>
          <Link to={`/movies/${imdbID}`}>
            <img src={Poster}/>
            <p><strong>{Title}</strong></p>
          </Link>
        </li>
      </div>
    );
  }
}