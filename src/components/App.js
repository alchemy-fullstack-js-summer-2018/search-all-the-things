import React, { Component, Fragment } from 'react';
import Header from './Header';
import Articles from './articles/Articles';
import Paging from './paging/Paging';
import styles from './App.css';
import { search as searchNews } from '../services/newsApi';

class App extends Component {

  state = {
    search: null,
    articles: null,
    page: 1,
    perPage: 15,
    totalResults: 0,
    error: null,
    loading: false
  };

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchNews();
    });
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
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }
  
  render() {
    const { articles, search, error, loading } = this.state;
    const { page, perPage, totalResults } = this.state;

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
            </section>
          }
        </main>

        <section>
          {search &&
          <Fragment>
            <p>Searching for &quot;{search}&quot;</p>
            <Paging
              page={page}
              perPage={perPage}
              totalResults={totalResults}
              onPage={this.handlePage}
            />
          </Fragment>
          }
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