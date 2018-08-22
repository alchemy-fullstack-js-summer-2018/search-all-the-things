import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Movie.css';

export default class Movie extends Component {

    static propTypes = {
      movie: PropTypes.object.isRequired
    };

    render() {
      const { movie } = this.props;
      const { Title, Year, Poster, imdbID } = movie;

      return (
        <li className={styles.movie}>
          <Link to={`/movies/${imdbID}`}>
            {Poster !== 'N/A'
              ? <img src={Poster}/>
              : <img src='https://www.nationalpetregister.org/assets/img/no-photo.jpg'/>}
            <p><strong>{Title}</strong> ({Year})</p> 
          </Link>
        </li>
      );
    }
}