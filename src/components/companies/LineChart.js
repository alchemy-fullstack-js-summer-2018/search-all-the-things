import React, { Component } from 'react';
import { Chart } from 'primereact/chart';
import PropTypes from 'prop-types';
import styles from './LineChart.css';

export default class LineChart extends Component {

  static propTypes = {
    company: PropTypes.object.isRequired
  };


  
  render() {

    const { company } = this.props;
    const chartLabels = company.chart.map(data => (data.label));
    const high = company.chart.map(data => (data.high));
    const low = company.chart.map(data => (data.low));

    const data = {
      labels: chartLabels,
      datasets: [
        {
          label: 'Stock High',
          data: high,
          fill: false,
          borderColor: '#4bc0c0'
        },
        {
          label: 'Stock Low',
          data: low,
          fill: false,
          borderColor: 'black'
        }
      ]   
    };

    return (
      <div className={styles.lineChart}>
        <Chart type="line" data={data} />
      </div>
    );
  }
}
