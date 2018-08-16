import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  handleSearch = () => {
    
  };
  
  render() {
    return (
      <div className={styles.app}>
        <header>
          It is alive!
          <Header onSearch={this.handleSearch}/>
        </header>
      </div>
    );
  }
}

export default App;