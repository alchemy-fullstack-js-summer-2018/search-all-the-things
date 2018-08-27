import React, { Component } from 'react';

class Home extends Component {

  render() {
    return (
      <div>
        <h2>
          <p>Welcome to Movie Finder!</p>  
        </h2>

        <h3>
          <p>This is a really simple web app to help you find just the right movie to watch. Just enter a search of whatever you&apos;re interested in, whether that be a certain actor, director, category, or just a subject. You can even save your favorites so you don&apos;t forget!</p>
          <footer>
            <p>App created by Mark Myers and Antreo Pukay</p>
          </footer>
        </h3>
      </div>
    );
  }
}

export default Home;