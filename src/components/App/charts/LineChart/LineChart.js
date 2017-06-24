import React, { Component } from 'react';
import { VictoryChart, VictoryLine, VictoryAxis, VictoryTheme } from 'victory';

import './LineChart.css';

class LineChart extends Component {
  render() {
    const{ data } = this.props;
    return (
      <div className="LineChart__container">
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
        <VictoryLine
            data={data}
            x="quarter"
            y="earnings"
          />
        </VictoryChart>
      </div>
    )
  }
}

export default LineChart;
