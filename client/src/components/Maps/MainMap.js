import * as React from "react";
import { Map, VectorLayer } from "@bayer/ol-kit";
import olFeature from "ol/Feature";
import olPoint from "ol/geom/Point";
import olTileLayer from "ol/layer/Tile";
import { Style as olStyle, Icon as olIcon } from "ol/style";
import {
  Vector as olVectorSource,
  // XYZ as olXYZ,
  Stamen as olStamen,
} from "ol/source";
import { fromLonLat } from "ol/proj";

import mark from "../../images/mapMarker.svg";

const MainMap = ({ locations }) => {
  // Create new Basemap
  const watercolorLayer = new olTileLayer({
    source: new olStamen({
      layer: "watercolor",
    }),
  });

  const onMapInit = async (map) => {
    // Remove default basemap provided by ol-kit and add watercolorLayer
    map.removeLayer(map.getLayers().getArray()[0]);
    map.addLayer(watercolorLayer);

    const mapView = map.getView();

    mapView.setCenter(fromLonLat(locations[0]));
    mapView.setZoom(10);
    mapView.setMaxZoom(16);

    // Create a point feature from coordinates provided in markdown file
    const features = locations.map((coord) => {
      const point = new olFeature({
        geometry: new olPoint(fromLonLat(coord)),
      });
      point.setStyle(
        new olStyle({
          image: new olIcon({
            src: mark,
            scale: 0.3,
          }),
        })
      );
      return point;
    });

    // Create a new vector layer and add it
    const source = new olVectorSource({ features });
    const layer = await new VectorLayer({ source });
    map.addLayer(layer);
  };
  return (
    <Map onMapInit={onMapInit} style={{ width: "100%", height: "500px" }} />
  );
};

export default MainMap;
