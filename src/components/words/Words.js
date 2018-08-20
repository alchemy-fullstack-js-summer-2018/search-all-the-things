import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Word from './Words';

export default class Words extends Component {

  static propTypes = {
    words: PropTypes.arrayOf(Object)
  };

  render() {
    const { words } = this.props;
    return (
      <ul className={styles.words}>
        {words.map((word, i) => (
          <Word key={i} word={word}/>
        ))}
      </ul>
    );
  }
}