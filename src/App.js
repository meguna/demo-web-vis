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
      <section>
        <h1>My Map</h1>
        <div className="map-wrapper">
          <iframe src={`${process.env.PUBLIC_URL}/kepler.gl.html`} title="map" sandbox="allow-scripts allow-same-origin" />
        </div>
        <p className="app-description">
          This is my interactive data visualization. It uses a really interesting data set called DATASET.
          Using this visualization, you can interact by CLICKING, DRAGGING, and more.
          Please explore this dataset!
        </p>
      </section>
      <div className="section">
        <h1>A Data Example</h1>
        <Linechart />
      </div>
      <div className="section">
        <h1>Another Data Example</h1>
        <div className="side-by-side">
          <div className="panel">
            <h2>Check this out</h2>
            <p>Here is some data I collected. Let me explain what's going on. Let me also explain here what methods I used to collect the data, and what statistical methods I used to analyze it.</p>
          </div>
          <div className="panel">
            <Scatterplot />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;