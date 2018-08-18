import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './album.css';
// import logo from '../../assets/logo.png';

export default class Album extends Component {

  static propTypes = {
    album: PropTypes.object.isRequired
  };

  render() {
    const { album } = this.props;
    const { name, artist, id } = album;

    return (
      <li className={styles.album}>
        <Link to={`/albums/${id}`}>
          {`${name}, ${artist}`}
        </Link>
      </li>
    );
  }
}