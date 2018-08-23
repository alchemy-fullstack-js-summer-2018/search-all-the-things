import React, { Component } from 'react';
//import PropTypes from 'prop-types';
import Search from './search/Search';
import { Link, Route } from 'react-router-dom';
import styles from './Header.css';

class Header extends Component {
  
  render() {

    return (
      <div className={styles.header}>
        <section className="header-container">
          <h1>Search For A Word!</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>             
              </li>
              <li>
                <Link to="/favorites">Favorites</Link>             
              </li>
              <li>
                <Link to="/words">Search Words</Link>             
              </li>
            </ul>
          </nav>
        </section>

        <section className="search-container">
          <Route component={Search}/>
        </section>

      </div>
    );
  }
}

export default Header;