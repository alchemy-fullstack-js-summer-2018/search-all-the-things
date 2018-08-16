import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends Component {

    state = {
      search: ''
    };

    render() {
      const { search } = this.state;

      return (
        <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
          <label>
                Search For:&nbsp;
            <input value={search} onChange={this.handleChange}/>
          </label>
          <button>Search</button>
        </form>
      );
    }
}