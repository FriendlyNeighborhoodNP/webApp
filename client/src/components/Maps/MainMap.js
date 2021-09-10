import * as React from "react";
import { Map, VectorLayer, Controls, Popup } from "@bayer/ol-kit";
import olFeature from "ol/Feature";
import olPoint from "ol/geom/Point";
import olTileLayer from "ol/layer/Tile";
import { Style as olStyle, Icon as olIcon } from "ol/style";
import {
  Attribution as olAttribution,
  defaults as olDefaultControls,
} from "ol/control";
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
      attribution: `Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.`,
    }),
  });

  const onMapInit = async (map) => {
    // Remove default basemap provided by ol-kit and add watercolorLayer
    map.removeLayer(map.getLayers().getArray()[0]);
    map.addLayer(watercolorLayer);

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

    // Configure map view to fit all points and limit zoom in
    const mapView = map.getView();

    mapView.fit(source.getExtent(), {
      padding: [20, 20, 20, 20],
      maxZoom: 16,
    });

    map.addLayer(layer);
  };
  return (
    <Map onMapInit={onMapInit} style={{ width: "100%", height: "500px" }}>
      <Controls />
    </Map>
  );
};

export default MainMap;
