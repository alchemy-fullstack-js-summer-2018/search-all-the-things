import React, { Component } from 'react';
import styles from './Home.css';

class Home extends Component {

  render() {
    return (
      <div className={styles.home}>
        <h3>Welcome to the app!</h3>

        <p id='app-bio'>'Search all the books!' is an app made by us, Robert Thompson and Mariah Adams, as part of their education at Alchemy Code Lab, a Portland based technology school. This app is an SPA using the React Router and the Google Books API to allow the user to search for books under a multitude of criteria. Additionally, we use Firebase's Realtime Database to store the users favorites, allowing us to make a highly responsive favoriting system. If you would like to learn more about this app, or would like to give it a try for yourself, please visit the <a href='https://github.com/MariahAdams/search-all-the-things'>Github</a> page and take a look at the README!</p>
        <div className="icon-container">
          <a id="mariah-pic" href="https://github.com/MariahAdams"><img src="https://avatars3.githubusercontent.com/u/35393465?s=460&v=4"/></a>
          <div className="mdl-tooltip mdl-tooltip--large" htmlFor="mariah-pic">Mariah!</div>
          <a id="robert-pic" href="https://github.com/rbtprograms"><img src="https://avatars2.githubusercontent.com/u/37790245?s=460&v=4"/></a>
          <div className="mdl-tooltip mdl-tooltip--large" htmlFor="robert-pic">Robert!</div>
        </div>
      </div>
    );
  }
}

export default Home;