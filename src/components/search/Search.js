import React, { Component } from 'react';
import './Search.css';

export default class Search extends Component {

  state = {
    search: ''
  };

  // handleSubmit = event => {
  //   event.preventDefault();
  //   this.props.onSearch(this.state);
  // };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form" onSubmit={event=> this.handleSubmit(event)}>
        <label>
          Search for:&nbsp;
          <input value={search} onChange={this.handleChange}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}