import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import styles from './Albums.css';

export default class Albums extends Component {

  static propTypes = {
    albums: PropTypes.object
  };

  render() {
    const { albums } = this.props;
    if(!albums) return null;

    return (
      <ul className={styles.albums}>
        {albums.map((album, i) => (
          <Album key={i} album={album}/>
        ))}
      </ul>
    );

  }

}