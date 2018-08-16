import React, { Component } from 'react';
import styles from './App.css';

class App extends Component {

  state = {
    query: null,
    list: null,
  };

  // handleSearch = (query) => {
  //   search(query)
  //     .then(results => {
  //       this.setState({
  //         list: results
  //       });
  //     });
  // };

  render() {

    return (
      <div className={styles.app}>
        <header>
          <h1>Search All The Things</h1>
          
        </header>
        <main>

        </main>
      </div>
    );
  }
}

export default App;
