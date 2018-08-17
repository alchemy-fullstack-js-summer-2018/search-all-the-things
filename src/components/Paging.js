import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Paging extends Component {

  static propTypes = {
    companies: PropTypes.arrayOf(Object)
  };

  render() {

    const { companies } = this.props;

    return (
      <p>{companies.length}</p>
    );
  }
}
