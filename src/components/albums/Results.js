import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Albums from './Albums';
import Paging from '../paging/Paging';
import getAlbums from '../../services/lastFmApi';

class Results extends Component {

  state = {
    albums: null,
    totalResults: 0,
    page: 1,
    perPage: 10,
    loading: false,
    error: null
  };

  static propTypes = {
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.searchAlbums();
  }

  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch === this.searchTerm) return;
    this.searchAlbums();
  }

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchAlbums();
    });
  };

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchAlbums() {
    const search = this.searchTerm;

    if(!search) return;

    this.setState({
      loading: true,
      error: null
    });

    getAlbums(search)
      .then(
        (results) => {
          this.setState({
            albums: results,
            totalResults: results.length
          });
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
    const { albums, loading, error } = this.state;
    const { page, perPage, totalResults } = this.state;
    const { searchTerm } = this;

    return (
      <section>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }

        {searchTerm &&
          <Fragment>
            <p>Searching for &quot;{searchTerm}&quot;</p>
            <Paging
              page={page}
              perPage={perPage}
              totalResults={totalResults}
              onPage={this.handlePage}
            />
          </Fragment>
        }

        {albums
          ? <Albums albums={albums}/>
          : <p>Please enter a search to get started</p>
        }
      </section>   
    );
  }
}

export default Results;