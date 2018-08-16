import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Search from './search/Search';
import styles from './Header.css';

class Header extends Component {

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };

  render() {
    const { onSearch } = this.props;

    return (
      <div className={styles.header}>

        <h1>Header Component</h1>

        <section>
          <Search onSearch={onSearch}/>
        </section>
      </div>
    );
  }
}

export default Header;