import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';
import { search } from '../services/newsApi';

class App extends Component {

  state = {
    query: null,
    list: null,
  };

  handleSearch = (query) => {
    search(query)
      .then(results => {
        this.setState({
          list: results
        });
      });
  };

  render() {

    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch} />
        </header>
        <main>


        </main>
      </div>
    );

  }

}

export default App;