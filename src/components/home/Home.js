import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {
  render() {
    return (
      <div className={styles.home}>
        <h2>Welcome to Reaction Shot.</h2>
        <p>This is a simple web app for browsing movies and shows. Get started by using the search bar to find a movie or a show that you&quot;re interested in.</p>
        <p>Click on a movie to see a more detailed view and save the ones you like to your favorites. You can  get a list of all your favorites by going to the Favorites page.</p>
        <footer>
          <p>Mario Quintana &bull; Injoong Yoon</p>
          <p>Source code can be found <a href="https://github.com/Quintam26/search-all-the-things/tree/master">here.</a></p>
        </footer>
      </div>
    );
  }
}

export default Home;