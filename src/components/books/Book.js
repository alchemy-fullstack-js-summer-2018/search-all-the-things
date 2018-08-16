import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Books.css';

class Article extends Component {

  render() {

    return(
      <section className={styles.books}>
        <h4>Book Component</h4>
      </section>
    );
  }
}

export default Article;