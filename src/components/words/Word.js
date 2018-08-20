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
        <p>Source:</p>
        <p>{word.attributionText}</p>
        <p>Definition:</p>
        <li>{word.text}</li>
      </Fragment>
    );
  }

}