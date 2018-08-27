import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Movie from './Movie';

export default class Movies extends Component {

  static propTypes = {
    movies: PropTypes.arrayOf(Object)
  };

  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie, i) => (
          <Movie key={i} movie={movie}/>
        ))}
      </ul>
    );
  }
}