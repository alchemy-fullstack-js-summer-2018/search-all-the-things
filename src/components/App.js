import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css'

class App extends Component {

  handleSearch = () => {
    console.log('You searched for something');
  };

  render() {

    return (
      <main className={styles.app}>
        <h1>Hello World</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      </main>
    )
  }
}

export default App;