import React, { Component } from 'react';
import Header from './Header';
import Books from './books/Books';
import styles from './App.css';
import { search, getBook } from '../services/booksApi';

class App extends Component {

  handleSearch = (term) => {
    console.log(`You searched for ${term.search}`);
    search(term);
  };

  render() {

    return (
      <main className={styles.app}>
        <h1>Alchemy Code Lab Library</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>

        <section>
          <Books />
        </section>
      </main>
    );
  }
}

export default App;