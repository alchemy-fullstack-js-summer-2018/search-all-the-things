import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './movie.css';
import logo from '../../assets/logo.png';

export default class Movie extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { Title, Year, Poster, imbdID } = movie;
    
    return (
      <li className={styles.movie}>
        <Link to={`/movies/${imbdID}`}>
          {Poster !== 'N/A'
            ? <img src={Poster}/>
            : <img src={logo}/>}
          <p><strong>{Title}</strong> ({Year})</p>
        </Link>
      </li>
    );
  }
}