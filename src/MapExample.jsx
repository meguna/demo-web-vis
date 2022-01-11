import React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import "App.css";

import polling_data from 'data/polling_locations.json';

const MAPBOX_ACCESS_TOKEN = "pk.eyJ1IjoibWVnbzk5IiwiYSI6ImNrMXc1czBuajA4OGIzbWxyeTB0M3ZjYnIifQ.XPSU11b9t3LASlHTE-4ptg";
const INITIAL_VIEW_STATE = {
  longitude: -71.0589,
  latitude: 42.364506,
  zoom: 13,
  pitch: 0,
  bearing: 0
};


function App() {
  const layers = [
    new GeoJsonLayer({
      id: 'scatterplot-layer',
      data: polling_data,
      pickable: true,
      stroked: true,
      filled: true,
      extruded: true,
      pointType: 'circle',
      getPointRadius: 50,
      lineWidthScale: 20,
      lineWidthMinPixels: 2,
      getFillColor: [160, 160, 180, 200],
      getStrokeColor: [160, 160, 180, 200],
      getStrokeWidth: 50,
      getLineWidth: 1,
      getElevation: 30
    })
  ];
  console.log(polling_data);

  return (
    <div className="app">
      <header className="app-header">
        My Interactive Data Visualization
      </header>
      <div className="map-wrapper">
        <DeckGL
          initialViewState={INITIAL_VIEW_STATE}
          controller={true}
          layers={layers}>
          <StaticMap mapboxApiAccessToken={MAPBOX_ACCESS_TOKEN} />
        </DeckGL>
      </div>
      <p className="app-description">
        This is my interactive data visualization. It uses a really interesting data set called DATASET.
        Using this visualization, you can interact by CLICKING, DRAGGING, and more.
        Please explore this dataset!
      </p>
    </div>
  );
}

export default App;