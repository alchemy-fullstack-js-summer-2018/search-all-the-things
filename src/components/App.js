import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  handleSearch = () => {

  };

  render() {

    return (
      <div className={styles.app}>
        <h1>Alchemy News Flash!</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
        <main>
        
        </main>
      </div>
    );
  }
}

export default App;
