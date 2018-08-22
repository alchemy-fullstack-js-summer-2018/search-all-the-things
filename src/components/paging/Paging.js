import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    perPage: PropTypes.number,
    totalResults: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage({ page: page + increment });
  }

  render() {

    const { totalResults, page, perPage } = this.props;

    if(!totalResults) return <div>Nothing found, try a different search</div>;

    const totalPages = Math.ceil(totalResults / perPage);
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disabled={page === 1}>&lt;Previous</button>
        <button onClick={() => this.handlePage(+1)} disabled={page === totalPages}>&gt;Next</button>
      </div>
    );
  }
}