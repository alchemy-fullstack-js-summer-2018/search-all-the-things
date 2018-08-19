import React, { Component } from 'react';
import Header from './Header';
import Articles from './articles/Articles';
import styles from './App.css';
import { search as searchNews } from '../services/newsApi';

class App extends Component {

  state = {
    search: null,
    articles: null,
    page: 1,
    perPage: 15,
    totalResults: 0,
    error: null
  };

  handleSearch = search => {
    this.setState({
      ...search,
      page: 1
    }, () => {
      this.searchNews();
    });
  };

  searchNews() {
    const { search, page, perPage } = this.state;

    this.setState({
      loading: true,
      error: null
    });

    searchNews({ search }, { page, perPage })
      .then(
        ({ articles, totalResults }) => {
          this.setState({ articles, totalResults });
        },
        err => {
          this.setState({ error: err.message });
        }
      );
  }
  
  render() {
    const { articles } = this.state;
    return (
      <div className={styles.app}>
        <header>
          It is alive!
          <Header onSearch={this.handleSearch}/>
        </header>
        <section>
          {articles
            ? <Articles articles={articles}/>
            : <p>Please enter a search to find news</p>
          }
        </section>

      </div>
    );
  }
}

export default App;