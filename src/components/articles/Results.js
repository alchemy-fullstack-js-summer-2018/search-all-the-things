import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
// import qs from 'query-string';
import Articles from './Articles';
import Paging from '../paging/Paging';
// import { search as searchNews } from '../../services/newsApi';

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

    render() {

      const { articles, loading, error } = this.state;
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

          {articles 
            ? <Articles articles={articles}/>
            : <p>Please enter a search to get started</p>
          }
        </section>
      );
    }
}

export default Results;