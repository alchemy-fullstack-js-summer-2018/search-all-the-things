/* eslint no-console: off */
import React, { Component } from 'react';
import { getFavorites } from '../../services/favoritesApi';
import Favorite from './Favorite';
import styles from './Favorites.css';

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
    if(!favorites) return (<h1>Favorite Movies and Shows</h1>);

    return (
      <div>
        <ul className={styles.favorites}>
          {favorites.map(favorite => {
            return <Favorite key={favorite.imdbID} movie={favorite}/>;
          })}
        </ul>
      </div>
    );
  }
}

export default Favorites;