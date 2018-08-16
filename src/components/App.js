import React, { Component } from 'react';
import { search as searchNews } from '../services/newsApi';
import Header from './Header';
import Articles from './articles/Articles';
import styles from './App.css';

class App extends Component {

    state = {
      search: null,
      articles: null,
      totalResults: 0
    };

    handleSearch = search => {
      this.setState(search, () => {
        this.searchNews();
      });
    };

    searchNews() {
      const { search } = this.state;
      searchNews({ search })
        .then(results => console.log(results));
    }

    render() {

      const { articles } = this.state;
      return (
        <div className={styles.app}>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
          <main>
            { articles 
              ? <Articles articles={articles}/>
              : <p>Enter a Search</p>
            }
          </main>

        </div>
      );
    }
}

export default App;