import React from 'react';
import "App.css";
import Map from './MapExample';
import Linechart from './LinechartExample';
import Scatterplot from './ScatterplotExample';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        My Interactive Data Visualization
      </header>
      <Map />
      <div className="map-wrapper">
        <iframe src={`${process.env.PUBLIC_URL}/kepler.gl.html`} title="map" sandbox="allow-scripts allow-same-origin"/>
      </div>
      <p className="app-description">
        This is my interactive data visualization. It uses a really interesting data set called DATASET.
        Using this visualization, you can interact by CLICKING, DRAGGING, and more.
        Please explore this dataset!
      </p>
      <Linechart />
      <Scatterplot />
    </div>
  );
}

export default App;