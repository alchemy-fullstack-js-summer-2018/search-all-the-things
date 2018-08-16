import React, { Component } from 'react';

export default class Search extends Component {

  state = {
    search: ''
  };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form">
        <label>
          Search for:&nbsp;
          <input value={search}/>
        </label>
      </form>
    );
  }
}