import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Books from './books/Books';
import qs from 'query-string';
import Paging from './paging/Paging';
import styles from './Results.css';
import { search as apiSearchBooks } from '../services/booksApi';

class Results extends Component {

  state = {
    data: null,
    search: null,
    totalItems: 0,
    loading: false,
    error: null
  };

  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchBooks();
  }

  componentDidUpdate({ location }) {
    const oldSearch = qs.parse(location.search);
    if(oldSearch.search !== this.searchTerm.search || oldSearch.page !== this.searchTerm.page || oldSearch.perPage !== this.searchTerm.perPage) {
      this.searchBooks();
    }
  }

  get searchTerm() {
    const { location } = this.props;
    const search = qs.parse(location.search);
    return search;
  }

  handleSearch = (term) => {
    this.setState({ 
      ...term,
      page: 1
    }, () => {
      this.searchBooks();
    });
  };

  handlePageChange = page => {
    const { search, perPage } = this.state.search;
    const { history } = this.props;
    history.push({
      pathname: '/results',
      search: qs.stringify({ search, page, perPage })
    });
  };

  
  searchBooks() {
    const search = this.searchTerm;

    this.setState({
      loading: true,
      error: null
    });

    apiSearchBooks(search)
      .then(
        results => {
          this.setState({ data: results.items, totalItems: results.totalItems, search: this.searchTerm });
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
    const { data, search, totalItems, loading, error } = this.state;

    return (
      <section className={styles.results}>
        <div>
          {(loading || error) && 
            <section className="notifications">
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </section>
          }
        </div>

        <div>
          {data &&
          <Fragment>
            <p>
              Searching for &quot;{search.search}&quot;
            </p>
            <Paging 
              page={+search.page}
              perPage={+search.perPage}
              totalResults={+totalItems}
              onPage={this.handlePageChange}
            />
          </Fragment>  
          }
        
          {data
            ? <Books books={data}/>
            : <p>Please enter a search to get started</p>
          }
        </div>
      </section>
    );
  }

}

export default Results;