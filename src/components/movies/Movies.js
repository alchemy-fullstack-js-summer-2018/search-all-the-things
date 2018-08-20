import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';
import styles from './Movies.css';

export default class Movies extends Component {

    static propTypes = {
      movies: PropTypes.arrayOf(Object)
    };
  
    render() {
      const { movies } = this.props;
  
      return (
        <ul className={styles.movies}>
          {movies.map((movie, i) => (
            <Movie key={i} movie={movie}/>
          ))}
        </ul>
      );
    }
}