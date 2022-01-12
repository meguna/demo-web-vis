import React from 'react';
import DeckGL from '@deck.gl/react';
import { GeoJsonLayer } from '@deck.gl/layers';
import { StaticMap } from 'react-map-gl';
import "App.css";

import polling_data from 'data/polling_locations.json';

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

const INITIAL_VIEW_STATE = {
  longitude: -71.0589,
  latitude: 42.364506,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

export default function Map() {
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

  return (
    <div className="map-wrapper">
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}>
        <StaticMap mapboxApiAccessToken={MAPBOX_TOKEN} />
      </DeckGL>
    </div>
  );
}
