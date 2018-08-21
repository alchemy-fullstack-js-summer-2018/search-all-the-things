import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAlbums } from '../../services/lastFmApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';
import { Link } from 'react-router-dom';


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

    const { name, artist, mbid, image, tracks, wiki } = album;
    const imageUrl = image[3]['#text'];
    const trackList = tracks.track[0].name;



    return (
      <article>
        <h2>{name}, {artist}</h2>
        <div>
          <Link to={`/albums/${mbid}`}>
            <img src={imageUrl} />
            <p>{trackList}</p>
  
          </Link>
        </div>
        <button onClick={this.handleClick}>
          {favorite ? 'Remove From' : 'Add To' } Favorites
        </button>
      </article>
    );
  }
}