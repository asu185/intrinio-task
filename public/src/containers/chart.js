import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { getStockInfo } from '../actions/index';

const tagStyle = {
  color: 'grey',
  fontSize: 8,
  textAlign: 'right',
};

class Chart extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(getStockInfo());
  }

  renderChart() {
    let company = this.props.stock.company;
    let dates = this.props.stock.dates;
    let values = this.props.stock.values;    
    let chart = c3.generate({
      bindto: '#chart',
      data: {
        x: 'x',
        columns: [
          ['x'].concat(dates),
          ['Value'].concat(values),          
        ]
      },
      axis: {
        x: {
          type: 'timeseries',
          tick: {
            format: '%Y-%m-%d'
          }
        }
      }
    });
  }

  render() {
    this.renderChart();
    return (
      <div>
        <div id="chart"></div>
        <div id="data-from-tag" style={tagStyle}>Data from Intrinio</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    stock: state.stock,
  };
}

export default connect(mapStateToProps)(Chart);