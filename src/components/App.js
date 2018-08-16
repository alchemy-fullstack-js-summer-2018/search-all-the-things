import React, { Component } from 'react';
import Header from './Header';
import styles from './App.css';
import { search } from '../services/newsApi';
class App extends Component {

  state = {
    articles: []
  };

  handleSearch = (term) => {
    search(term)
      .then(a => this.setState({ articles: a }));
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