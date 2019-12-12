import React, {Component} from 'react'
import {Bar} from 'react-chartjs-2'
import './ChartComponent.scss'

export class ChartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ['Naughty Dog', 'Rockstar Games', 'Kojima Productions'],
        datasets: [
          {
            label: '',
            data: [82, 76, 85, 0, 100],
            backgroundColor: ['#E4162A','#F7A524','#050000'],
          }
        ]
      }
    }
  }

  render() {
    return (
      <div className="chart">
        <Bar
          data = {this.state.chartData}
          options = {{
            title: {
              display: true,
              text: 'CEO Approval Rating',
              fontSize: 25
            },
            legend : {
              display: false,
            }
          }}
          width = {400}
          height = {300}
        />
      </div>
    );
  }
}
