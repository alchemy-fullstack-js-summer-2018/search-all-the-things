import React, { Component } from 'react';
import Search from './search/Search';
import styles from './Header.css';
import { Route, NavLink } from 'react-router-dom';

class Header extends Component {

  render() {

    return (
      <div className={styles.header}>
        <nav>
          <ul id="nav-ul">
            <li>
              <NavLink 
                to="/"
                style={{ color: 'white', textDecoration: 'none' }} 
                exact activeStyle={{ color: 'rgb(62, 83, 175)', textDecoration: 'underline' }}
              >Home</NavLink>
            </li>
            <li>
              <NavLink 
                to="/results"
                style={{ color: 'white', textDecoration: 'none' }} 
                activeStyle={{ color: 'rgb(62, 83, 175)', textDecoration: 'underline' }}
              >Results</NavLink>
            </li>
            <li>
              <NavLink 
                to="/favorites"
                style={{ color: 'white', textDecoration: 'none' }} 
                activeStyle={{ color: 'rgb(62, 83, 175)', textDecoration: 'underline' }}
              >Favorites</NavLink>
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