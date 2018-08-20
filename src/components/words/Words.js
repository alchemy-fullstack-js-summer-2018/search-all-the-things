import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Word from './Word';
import styles from './Words.css';

export default class Words extends Component {

  static propTypes = {
    words: PropTypes.array
  };

  render() {
    const { words } = this.props;
    return (
      <Fragment>
        <ul className={styles.words}>
          {words.map((word, i) => (
            <Word key={i} word={word}/>
          ))}
        </ul>
      </Fragment>
    );
  }
}