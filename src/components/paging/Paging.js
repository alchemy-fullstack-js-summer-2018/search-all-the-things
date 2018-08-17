import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

    static propTypes = {

    };

    handlePage() {

    }

    render() {
      return (
        <div>
          <span>Page {page} of {totalPages}</span>
        &nbsp;
          <button onClick={() => this.handlePage(-1)}>&lt; Prev</button>
          <button onClick={() => this.handlePage(+1)}>Next &gt;</button>
        </div>
      );
    }
}