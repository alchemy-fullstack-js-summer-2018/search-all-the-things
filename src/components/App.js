import React, { Component, Fragment } from 'react';
import Header from './Header';
import Books from './books/Books';
import Paging from './paging/Paging';
import styles from './App.css';
import { search } from '../services/booksApi';

class App extends Component {

  state = {
    data: null,
    search: null,
    page: 1,
    perPage: 20,
    totalResults: 0
  };

  handleSearch = (term) => {
    this.setState({ search: term.search });
    console.log(`You searched for ${term.search}`);
    search(term)
      .then(results => this.setState({ data: results }));
    console.log('****AFTER SEARCH*****');
  };

  handlePage = paging => {
    this.setState(paging, () => {
      this.search();
    });
  };

  render() {
    const { data, search, page, perPage, totalResults } = this.state;

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
              totalResults={totalResults}
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