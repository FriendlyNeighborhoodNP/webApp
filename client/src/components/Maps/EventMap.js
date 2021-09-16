import React from "react";
import { Map, VectorLayer } from "@bayer/ol-kit";
import olFeature from "ol/Feature";
import olPoint from "ol/geom/Point";

import { Style as olStyle, Icon as olIcon } from "ol/style";
import { Vector as olVectorSource } from "ol/source";
import { fromLonLat } from "ol/proj";

import mark from "../../images/mapMarker.svg";

const EventMap = ({ lon, lat }) => {
  const location = [lon, lat];

  const onMapInit = async (map) => {
    const apptLonLat = fromLonLat(location);
    const mapView = map.getView();

    mapView.setCenter(apptLonLat);
    mapView.setZoom(15);
    mapView.setMaxZoom(16);

    // Create a point feature from coordinates provided in markdown file
    const point = new olFeature({
      geometry: new olPoint(apptLonLat),
    });
    point.setStyle(
      new olStyle({
        image: new olIcon({
          src: mark,
          scale: 0.3,
        }),
      })
    );

    // Create a new vector layer and add it
    const source = new olVectorSource({ features: [point] });
    const layer = await new VectorLayer({ source });
    map.addLayer(layer);
  };

  return (
    <Map onMapInit={onMapInit} style={{ width: "100%", height: "300px" }} />
  );
};

export default EventMap;
