import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Movie extends Component {
  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { title, year, poster } = movie;

    return (
      <li>
        <h2><strong>{title}</strong> ({year})</h2>
        <img src={poster}/>
      </li>
    );
  }
}

export default Movie;