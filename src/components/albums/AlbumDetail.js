import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbums } from '../../services/lastFmApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Album extends Component {

  state = {
    album: null,
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { mbid } = this.props.match.params;
    getAlbums(mbid)
      .then(album => {
        this.setState({ album });
      })
      .catch(console.log);

    getFavorite(mbid)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { album, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(album.mbid)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.album)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { album, favorite } = this.state;
    if(!album) return null;

    const { name, artist } = album;

    return (
      <article>
        <h2>{name}, {artist}</h2>
        {/* <img src={ ** image variable goes here **} /> */}
        <button onClick={this.handleClick}>
          {favorite ? 'Remove From' : 'Add To' } Favorites
        </button>
      </article>
    );
  }
}