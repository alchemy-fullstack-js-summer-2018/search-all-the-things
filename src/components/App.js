import React, { Component } from 'react';
import { search as searchWords } from '../services/wordnikApi';
import Header from './Header';
import styles from './App.css';
import Words from './words/Words';

class App extends Component {

  state = {
    search: null,
    words: null,
    loading: false,
    error: null
  };

  handleSearch = search => {
    this.setState({
      ...search
    }, () => {
      this.searchWords();
    });
  };

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchWords();
    });
  };

  searchWords() {
    const { search } = this.state;

    this.setState({
      loading: true,
      error: null
    });

    searchWords(search)
      .then(
        (words) => {
          this.setState({ words });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
      
  }

  render() {
    const { words, loading, error } = this.state;
    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      
        <main>
          {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>}

          <section>

            {words &&
              <Words words={words}/> 
            }

            

          </section>
        </main>
      </div>
    );
  }
}

export default App;