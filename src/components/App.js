import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  // handleSearch = () => {
  //   console.log('what are you looking for?');
  // };

  render() {
    
    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      
        <main>
          <h2>do u see me? please see me yo.</h2>
        
        </main>
      </div>
    );
  }
}

export default App;