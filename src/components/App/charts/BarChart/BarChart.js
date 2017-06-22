import React, { Component } from 'react';
import { VictoryChart, VictoryBar, VictoryAxis, VictoryTheme } from 'victory';

import './BarChart.css';

class BarChart extends Component {
  render() {
    const{ data } = this.props;
    return (
      <div className="BarChart__container">
        <VictoryChart
          domainPadding={20}
          theme={ VictoryTheme.material }
        >
          <VictoryAxis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
          <VictoryAxis
            dependentAxis
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
          <VictoryBar
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      </div>
    )
  }
}

export default BarChart;
