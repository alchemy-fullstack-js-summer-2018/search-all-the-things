import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbums } from '../../services/lastFmApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Album extends Component {

  state = {
    albums: null,
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { mbid } = this.props.match.params;
    getAlbums(mbid)
      .then(albums => {
        this.setState({ albums });
      })
      .catch(console.log);

    getFavorite(mbid)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { albums, favorites } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(album.mbid)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.albums)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { albums, favorite } = this.state;
    if(!albums) return null;

    const { name, artist } = albums;

    return (
      <article>
        <h2>{name}</h2>
        {/* <img src={ ** image variable goes here **} /> */}
        <button onClick={this.handleClick}>
          {favorite ? 'Remove From' : 'Add To' } Favorites
        </button>
      </article>
    );
  }
}