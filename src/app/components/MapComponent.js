import React from 'react'
import {ComposableMap, Geographies, Geography, ZoomableGroup} from "react-simple-maps";
const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapComponent = ({ onCountryChange }) => {
  return (
    <ComposableMap>
    <ZoomableGroup>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              onClick={() => {
                const { NAME } = geo.properties;
                onCountryChange(NAME)
              }}
              onMouseLeave={() => {
              }}
              style={{
                default: {
                  fill: "#D6D6DA",
                  outline: "none"
                },
                hover: {
                  fill: "#F53",
                  outline: "none"
                },
                pressed: {
                  fill: "#E42",
                  outline: "none"
                }
              }}
            />
          ))
        }
      </Geographies>
    </ZoomableGroup>
  </ComposableMap>
  );
}

export default MapComponent;
