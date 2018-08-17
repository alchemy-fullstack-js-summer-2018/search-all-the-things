import React, { Component } from 'react';
import Header from './Header';
import Books from './books/Books';
import styles from './App.css';
import { search } from '../services/booksApi';

class App extends Component {

  state = {
    data: []
  };

  handleSearch = (term) => {
    console.log(`You searched for ${term.search}`);

    search(term)
      .then(results => this.setState({ data: results }));
    console.log('****AFTER SEARCH*****');
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