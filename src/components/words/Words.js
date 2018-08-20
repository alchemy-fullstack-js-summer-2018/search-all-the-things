import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';
import styles from './Words.css';
// import Search from './search/Search';

export default class Words extends Component {

  static propTypes = {
    words: PropTypes.array
  };

  render() {
    const { words } = this.props;
    return (
      <Fragment>
        <h4>Number of definitions returned:</h4>
        <h4>{words.length}</h4>
        <h2>Word You Searched For:</h2>
        <h2>{}</h2>
        <ul className={styles.words}>
          {words.map((word, i) => (
            <Word key={i} word={word}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}