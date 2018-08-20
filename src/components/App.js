import React, { Component, Fragment } from 'react';
//import { search as searchWords } from '../services/wordnikApi';
import Header from './Header';
import styles from './App.css';
import Words from './Words';

class App extends Component {

  state = {
    search: null,
    words: null,
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
    const { words, search, loading, error } = this.state;
    // const { page, perPage, totalResults } = this.state;
    
    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
      
        <main>
          <h2>App Main</h2>
          {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>}

          <section>
            {search &&
              <Fragment>
                <h3> Word you searched for: </h3>
              </Fragment>
            }

            {words
              ? <Words words={words}/>
              : <p>Please search for a word</p>
            }

          </section>
        </main>
      </div>
    );
  }
}

export default App;