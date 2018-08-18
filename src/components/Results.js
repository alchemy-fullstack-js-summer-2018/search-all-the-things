import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Books from './books/Books';
import qs from 'query-string';
import Paging from './paging/Paging';
import styles from './App.css';
import { search as apiSearchBooks } from '../services/booksApi';

class Results extends Component {

  state = {
    data: null,
    search: null,
    page: 1,
    perPage: 20,
    totalItems: 0,
    loading: false,
    error: null
  };

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchBooks();
  }

  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch !== this.searchTerm) {
      this.searchBooks();
    }
  }

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

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
    const { page, perPage } = this.state;
    const search = this.searchTerm;

    this.setState({
      loading: true,
      error: null
    });

    apiSearchBooks({ search, page, perPage })
      .then(
        results => {
          console.log(results);
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
    const { data, search, page, perPage, totalItems } = this.state;

    return (
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
          ? <Books books={data}/>
          : <p>Please enter a search to get started</p>
        }
      </section>
    );
  }

}

export default Results;