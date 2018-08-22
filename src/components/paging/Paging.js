import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Paging extends Component {

  static propTypes = {
    page: PropTypes.number,
    perPage: PropTypes.number,
    totalResults: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  handlePage(increment) {
    const { page, onPage } = this.props;
    onPage(page + increment);
  }

  render() {
    const { page, perPage, totalResults } = this.props;

    if(!totalResults) return <div>No results found, try another search</div>;

    const totalPages = Math.ceil(totalResults / perPage);
    
    return (
      <div>
        <span>Page {page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => this.handlePage(-1)} disable={page === 1}>&lt; Prev</button>
        <button onClick={() => this.handlePage(+1)} disable={page === totalPages}>Next &gt;</button>
      </div>
    );
  }
}

export default Paging;