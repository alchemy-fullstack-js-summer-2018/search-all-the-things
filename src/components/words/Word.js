import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Word extends Component {

  static propTypes = {
    word: PropTypes.object
  };

  render() {
    const { word } = this.props;
    return (
      <li>{word.text}</li>
    );
  }

}