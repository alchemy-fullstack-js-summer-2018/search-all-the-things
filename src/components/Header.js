import React, { Component } from 'react';
import styles from './Header.css';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>

        <h1>Header Component</h1>

      </div>
    )
  }
}

export default Header;