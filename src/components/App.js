import React, { Component } from 'react';
//import { search as searchWords } from '../services/wordnikApi';
import Header from './Header';
import styles from './App.css';

class App extends Component {

  state = {
    search: null,
    loading: false,
    error: null
  };

  handleSearch = search => {
    this.setState({
      ...search,
      page: 1
    }, () => {
      this.searchWords();
    });
  };

  render() {
    const { loading, error } = this.state;
    //line above will change to line below
    //const { words, search, loading, error } = this.state;
    // const { page, perPage, totalResults } = this.state;
    
    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      
        <main>
          <h2>do u see me? please see me yo.</h2>
          {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>}
        
        </main>
      </div>
    );
  }
}

export default App;