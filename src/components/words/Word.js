import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class Word extends Component {

  static propTypes = {
    word: PropTypes.object
  };

  render() {
    const { word } = this.props;
    return (
      <Fragment>
        <h2>{word.word}</h2>
        <li>{word.text}</li>
        <li>{word.score}</li>
        <li>{word.attributionText}</li>
      </Fragment>
    );
  }

}