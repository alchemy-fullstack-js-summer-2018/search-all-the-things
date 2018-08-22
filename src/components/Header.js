import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  onSearch = term => {
    this.props.onSearch(term);
  };

  render() {

    const { onSearch } = this.props;

    return (
      <div className={styles.header}>
        <section className="header-container">
          <h1>News finder</h1>
        </section>

        <section className="search-container">
          <Search onSearch={onSearch}/>
        </section>
      </div>
    );
  }
}

export default Header;