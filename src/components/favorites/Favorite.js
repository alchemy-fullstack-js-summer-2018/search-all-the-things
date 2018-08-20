import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Favorite.css';

export default class Article extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { imdbID, Title, Poster } = movie;

    return (
      <div>
        <li className={styles.favorite}>
          <Link to={`/articles/${imdbID}`}>
            <img src={Poster}/>
            <h2>{Title}</h2>
          </Link>
        </li>
      </div>
    );
  }
}