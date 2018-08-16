import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Search.css';

class Search extends Component {

  state = {
    search: ''
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  handleChange = ({ target }) => {
    this.setState({ search: target.value })
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
  };

  render() {
    const { search } = this.state;

    return (
      <div className={styles.search}>
        <h3>Search Component</h3>
        <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
          <label>
            Search For:&nbsp;
            <input value={search} onChange={this.handleChange}/>
          </label>
          <button>Search</button>
        </form>
      </div>
    );
  }
}

export default Search;