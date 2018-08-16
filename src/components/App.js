import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  handleSearch = (term) => {
    console.log(`You searched for ${term.search}`);

  };

  render() {

    return (
      <main className={styles.app}>
        <h1>Alchemy Code Lab Library</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      </main>
    );
  }
}

export default App;