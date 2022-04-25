import React from 'react';
import Plot from 'react-plotly.js';
import mbtaData from './data/mbta.json';

class PlotlyExample extends React.Component {
  constructor(props) {
    super(props);
    const mbtaWeekend = mbtaData.filter(record => record['day_type_name'] === 'weekend');
    const mbtaWeekday = mbtaData.filter(record => record['day_type_name'] === 'weekday');
    this.state = {
      xDataWeekend: mbtaWeekend.map(record => record['sched_hr_int']),
      yDataWeekend: mbtaWeekend.map(record => record['rel_p']),
      xDataWeekday: mbtaWeekday.map(record => record['sched_hr_int']),
      yDataWeekday: mbtaWeekday.map(record => record['rel_p']),
    }
  }

  render() {
    const { xDataWeekday, yDataWeekday, xDataWeekend, yDataWeekend } = this.state;
    return (
      <div>
        <Plot
          data={[
            {
              x: xDataWeekend,
              y: yDataWeekend,
              type: 'histogram2d',
              yaxis: 'y1',
              autobinx: false,
              xbins: {
                size: 1
              },
              coloraxis: 'coloraxis',
            },
            {
              x: xDataWeekday,
              y: yDataWeekday,
              type: 'histogram2d',
              xaxis: 'x2',
              yaxis: 'y1',
              autobinx: false,
              xbins: {
                size: 1
              },
              coloraxis: 'coloraxis',
            },
          ]}
          layout={{
            coloraxis: {
              showscale: false,
              colorscale: 'YlGnBu',
            },
            title: 'A Fancy Plot',
            font: {
              family: 'sans-serif',
              color: 'black'
            },
            grid: { rows: 1, columns: 2 },
            xaxis: { domain: [0, 0.45], dtick: 3 },
            xaxis2: { domain: [0.55, 1], dtick: 3 },
            yaxis: { domain: [0, .9] },
            yaxis2: { anchor: 'x2', domain: [0, .9] },
            annotations: [{
              text: "Weekend",
              showarrow: false,
              x: 0.17,
              y: 1,
              xref: 'paper',
              yref: 'paper',
            },
            {
              text: "Weekday",
              showarrow: false,
              x: 0.83,
              y: 1,
              xref: 'paper',
              yref: 'paper',
            }
            ]            
          }}
          config={{
            displayModeBar: false,
          }}
        />
      </div>
    );
  }
}
export default PlotlyExample;