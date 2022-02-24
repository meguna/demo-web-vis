import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';

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
  legend: {
    display: false,
  },
};

export const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'dataset1',
      data: [545,988, 197, 891, 23, 289, 950],
      ...chartSettings,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

export default function Scatterplot() {
  return <Bar options={options} data={data} />;
}
