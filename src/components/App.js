import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {
  
  render() {
    return (
      <div className={styles.app}>
        <header>
          It is alive!
          <Header/>
        </header>
      </div>
    );
  }
}

export default App;