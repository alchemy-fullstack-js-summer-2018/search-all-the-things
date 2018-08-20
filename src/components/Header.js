import React, { Component } from 'react';
import Search from './search/Search';
import styles from './Header.css';
import { Link, Route } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav>
          <ul id="nav-ul">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/results">Results</Link>
            </li>
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
        </nav>
        <section>
          <Route component={Search}/>
        </section>
      </div>
    );
  }
}

export default Header;