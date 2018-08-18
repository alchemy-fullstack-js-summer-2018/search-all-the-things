import React, { Component, Fragment } from 'react';
import Header from './Header';
import Books from './books/Books';
import Paging from './paging/Paging';
import styles from './App.css';
import { search as apiSearchBooks } from '../services/booksApi';

class App extends Component {

  state = {
    data: null,
    search: null,
    page: 1,
    perPage: 20,
    totalItems: 0,
    loading: false,
    error: null
  };

  handleSearch = (term) => {
    this.setState({ 
      ...term,
      page: 1 
    }, () => {
      console.log(`You searched for ${term.search}`);
      this.searchBooks();
    });
    // this.searchBooks()
    //   .then(results => {
    //     this.setState({ data: results });
    //     this.setState({ totalItems: results.totalItems });
    //   });
    console.log('****AFTER SEARCH*****');
  };

  handlePage = paging => {
    this.setState(paging, () => {
      apiSearchBooks({ search: this.state.search }, this.state.page, this.state.perPage)
        .then(results => this.setState({ data: results }));
    });
  };

  searchBooks() {
    const { search, page, perPage } = this.state;

    this.setState({
      loading: true,
      error: null
    });

    apiSearchBooks({ search, page, perPage })
      .then(
        results => {
          console.log(results);
          this.setState({ data: results });
          this.setState({ totalItems: results.totalItems });
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
    const { data, search, page, perPage, totalItems, loading, error } = this.state;

    return (
      <div>
        <h1>Alchemy Code Lab Library</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>

        <main className={styles.app}>
          {(loading || error) &&
            <section className="notifications">
              {loading && <div>Loading...</div>}            
              {error && <div>{error}</div>}
            </section>
          }

          <section>
            {data &&
            <Fragment>
              <p>
                Searching for &quot;{search}&quot;
              </p>
              <Paging 
                page={page}
                perPage={perPage}
                totalResults={totalItems}
                onPage={this.handlePage}
              />
            </Fragment>  
            }

            {data
            ? <Books books={data.items}/>
            : <p>Please enter a search to get started</p>
            }
          </section>
        </main>
      </div>
    );
  }
}

export default App;