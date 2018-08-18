import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Search from './search/Search';
import styles from './Header.css';

class Header extends Component {
   
  render() {
    
    return (
      <div className={styles.header}>

        <section className="header-container">
          <h1>News Search</h1>
        </section>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/articles">Search</Link>
            </li>
          </ul>
        </nav>
        <section className="search-container">
          <Route component={Search}/>
        </section>

      </div>
    );
  }

}

export default Header;