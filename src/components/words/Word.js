import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Word extends Component {

  static propTypes = {
    word: PropTypes.object.isRequired
  };

  render() {

    return (
      <p>Word JS render</p>
    );
  }

}