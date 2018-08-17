import React, { Component } from 'react';
import { search as searchNews } from '../services/newsApi';
import Header from './Header';
import Articles from './articles/Articles';
import styles from './App.css';
import Paging from '../components/paging/Paging';

class App extends Component {

    state = {
      search: null,
      Search: null,
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
        .then(({ Search, totalResults }) => {
          this.setState({ Search, totalResults });
        });
    }

    render() {

      const { page, perPage, totalResults } = this.state;
      const { searchTerm } = this;
      const { Search } = this.state;
      return (
        <div className={styles.app}>
          <header>
            <Header onSearch={this.handleSearch}/>
          </header>
          <main>
            { Search 
              ? <Articles articles={Search}/>
              : <p>Enter a Search</p>
            }
            <p>Searching for &quot;{searchTerm}&quot;</p>
            <Paging 
              page={page}
              perPage={perPage}
              totalResults={totalResults}
              onPage={this.handlePage}
            />
          </main>
    
        </div>
      );
    }
}

export default App;