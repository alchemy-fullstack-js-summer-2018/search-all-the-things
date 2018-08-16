import React, { Component } from 'react';
import Search from './search/Search';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>

        <h1>Header Component</h1>

        <section>
          <Search />
        </section>
      </div>
    )
  }
}

export default Header;