import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Search extends Component {
  state = {
    search: ''
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log('***CONSOLE***', this.state);
    this.props.onSearch(this.state);
  };

  render() {
    const { search } = this.state;

    return (
      <form onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search for your favorites:&nbsp;
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;