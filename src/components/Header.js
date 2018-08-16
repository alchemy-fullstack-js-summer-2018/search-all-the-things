import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';

class Header extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  render() {
    const { onSearch } = this.props;

    return (
      <div>
        <section>
          <h1>Movies Search</h1>
        </section>
        <section>
          <Search onSearch={onSearch}/>
        </section>
      </div>
    );
  }
}

export default Header;