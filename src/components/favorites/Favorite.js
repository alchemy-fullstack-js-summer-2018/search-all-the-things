import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Article extends Component {

  static propTypes = {
    movie: PropTypes.object.isRequired
  };

  render() {
    const { movie } = this.props;
    const { id, Title, Poster } = movie;

    return (
      <li>
        <Link to={`/articles/${id}`}>
          <img src={Poster}/>
          <h2>{Title}</h2>
        </Link>
      </li>
    );
  }
}