import React, { Component, Fragment } from 'react';
import Header from './Header';
import Books from './books/Books';
import Paging from './paging/Paging';
import styles from './App.css';
import { search as searchBooks } from '../services/booksApi';

class App extends Component {

  state = {
    data: null,
    search: null,
    page: 1,
    perPage: 20
  };

  handleSearch = (term) => {
    this.setState({ search: term.search });
    console.log(`You searched for ${term.search}`);
    searchBooks(term, this.state.page, this.state.perPage)
      .then(results => this.setState({ data: results }));
    console.log('****AFTER SEARCH*****');
  };

  handlePage = paging => {
    this.setState(paging, () => {
      searchBooks();
    });
  };

  render() {
    const { data, search, page, perPage } = this.state;

    return (
      <main className={styles.app}>
        <h1>Alchemy Code Lab Library</h1>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>

        <section>
          {data &&
          <Fragment>
            <p>
              Searching for &quot;{search}&quot;
            </p>
            <Paging 
              page={page}
              perPage={perPage}
              totalResults={data.totalItems}
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
    );
  }
}

export default App;