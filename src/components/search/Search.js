import React, { Component } from 'react';

class Search extends Component {
  state = {
    search: ''
  };

  render() {
    const { search } = this.state;

    return (
      <form>
        <label>
          Search for your favorites:&nbsp;
          <input value={search}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;