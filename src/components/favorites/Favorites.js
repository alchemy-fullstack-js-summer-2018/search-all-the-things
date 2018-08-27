/* eslint no-console: off */
import React, { Component } from 'react';
import { getFavorites } from '../../services/favoritesApi';
import Favorite from './Favorite';

class Favorites extends Component {
  state = {
    favorites: null
  };

  componentDidMount() {
    getFavorites()
      .then(favorites => {
        this.setState({ favorites });
      })
      .catch(console.log);
  }

  render() {
    const { favorites } = this.state;
    if(!favorites) return (<h2>Favorite Movies</h2>);

    return (
      <div>
        <ul>
          {favorites.map(favorite => {
            return <Favorite key={favorite.imdbID} movie={favorite}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default Favorites;