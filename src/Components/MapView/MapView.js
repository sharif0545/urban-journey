import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./MapView.css";
const MAPBOX_TOKEN =
  "pk.eyJ1Ijoic2hhcmlmMDU0NSIsImEiOiJja3pzbTg2M3YwMWE3MnVxazhndTRyYTFwIn0.75XyG4NCzZnlm-6uD_Pk3w";
const MapView = () => {
  let [viewport, setViewport] = useState({
    longitude: 90.412521,
    latitude: 23.810331,
    zoom: 10,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  return (
    <Map
      mapboxAccessToken={MAPBOX_TOKEN}
      {...viewport}
      onMove={(newView) => setViewport(newView)}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      // className="mapSpacing"
      style={{
        width: "100%",
        border: "1px solid lightGray",
        borderRadius: "5px",
      }}
    >
      <Marker longitude={90.412521} latitude={23.810331} color="red" />
    </Map>
  );
};

export default MapView;
