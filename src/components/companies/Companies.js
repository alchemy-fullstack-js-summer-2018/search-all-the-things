import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Company from './Company';

export default class Companies extends Component {

  static propTypes = {
    results: PropTypes.arrayOf(Array),
    page: PropTypes.number.isRequired
  };

  render() {
    const { results, page } = this.props;
    if(!results) return null;
    return (
      <Fragment>
        <ul>
          {results[page - 1].map((result, i) => (
            <Company key={i} company={result}/>
          ))}
        </ul>
      </Fragment>
    );
  }

}