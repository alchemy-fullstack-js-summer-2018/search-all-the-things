import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Album extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { album } = this.props;
    const { name, artist, mbid } = album;
    return (
      <li>
        <Link to={`/albums/${mbid}`}>
          {name}
          {artist}
          {/* <img src={image}/> */}
        </Link>
      </li>
    );
  }
}

