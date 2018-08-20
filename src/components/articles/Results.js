import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Articles from './Articles';
import Paging from '../paging/Paging';
import { search as searchMovies } from '../../services/newsApi';

class Results extends Component {

    state = { 
      articles: null,
      totalResults: 0,
      page: 1,
      perPage: 10,
      loading: false,
      error: null,
    };

    static propTypes = {
      location: PropTypes.object.isRequired
    };

    componentDidMount() {
      this.searchMovies();
    }

    componentDidUpdate({ location }) {
      const { search: oldSearch } = qs.parse(location.search);
      if(oldSearch === this.searchTerm) return;
      this.searchMovies();
    }

    handlePage = paging => {
      this.setState(paging, () => {
        this.searchMovies();
      });
    };

    get searchTerm() {
      const { location } = this.props;
      const { search } = qs.parse(location.search);
      return search;
    }

    searchMovies() {
      const { page, perPage } = this.state;
      const search = this.searchTerm;
      if(!search) return;

      this.setState({
        loading: true,
        error: null
      }); 

      searchMovies({ search }, { page, perPage })
        .then(
          ({ Search, totalResults }) => {
            this.setState({ movies: Search, totalResults });
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

      const { movies, loading, error } = this.state;
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
                totalResults={parseInt(totalResults)}
                onPage={this.handlePage}
              />
            </Fragment>
          }

          <div>
            {movies 
              ? <Articles articles={movies}/>
              : <h1>Please enter a search to get started</h1>
            }
          </div>
        </section>
      );
    }
}
export default Results;