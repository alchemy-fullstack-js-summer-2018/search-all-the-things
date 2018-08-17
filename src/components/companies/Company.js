import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Company extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };

  render() {
    const { company } = this.props;
    const { 
      companyName, 
      symbol, 
      latestPrice,
      latestVolume, 
      week52High,
      week52Low,
      marketCap } = company;

    return (
      <li>
        <h2>{companyName} ({symbol})</h2>
        <p>Latest price: {latestPrice}</p>
        <p>Latest volume: {latestVolume}</p>
        <p>52 week high: {week52High}</p>
        <p>52 week high: {week52Low}</p>
        <p>Market cap: {marketCap}</p>
      </li>
    );
  }
}