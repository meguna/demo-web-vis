import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import scatterData from './data/scatter.json';


const chartSettings = {
  label: 'My First dataset',
  fill: false,
  backgroundColor: 'rgba(75,192,192,0.4)',
  pointBorderColor: 'rgba(75,192,192,1)',
  pointBackgroundColor: '#fff',
  pointBorderWidth: 1,
  pointHoverRadius: 5,
  pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  pointHoverBorderColor: 'rgba(220,220,220,1)',
  pointHoverBorderWidth: 2,
  pointRadius: 3,
  pointHitRadius: 10,
};


export const options = {
  responsive: true,
  scales: {
    y: {
      scaleLabel: {
        display: true,
        labelString: "Some Y Variable",
        fontColor: "white"
      },
      type: 'logarithmic',
    },
    x: {
      scaleLabel: {
        display: true,
        labelString: "The X Variable",
        fontColor: "white",
      },
    }
  },
  legend: {
    display: false,
  },
};

export const data = {
  datasets: [
    {
      data: scatterData,
      ...chartSettings,
    },
  ],
};

export default function Scatterplot() {
  return <Scatter options={options} data={data} />;
}
