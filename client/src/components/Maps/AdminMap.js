import React from "react";
import { Map, VectorLayer } from "@bayer/ol-kit";
import olFeature from "ol/Feature";
import olPoint from "ol/geom/Point";
import { Style as olStyle, Icon as olIcon } from "ol/style";
import { Vector as olVectorSource } from "ol/source";
import { fromLonLat, transform } from "ol/proj";

import mark from "../../images/mapMarker.svg";

const AdminMap = ({ updateCoord }) => {
  const location = [-81.3039779663086, 31.9473743438721];

  const onMapInit = async (map) => {
    const apptLonLat = fromLonLat(location);
    const mapView = map.getView();
    const source = new olVectorSource();
    const pointLayer = await new VectorLayer({ source });
    map.addLayer(pointLayer);

    mapView.setCenter(apptLonLat);
    mapView.setZoom(14);
    mapView.setMaxZoom(16);

    map.on("singleclick", (e) => {
      const coords = transform(e.coordinate, "EPSG:3857", "EPSG:4326");
      updateCoord(coords);

      // Create a point feature from coordinates provided in markdown file
      const point = new olFeature({
        geometry: new olPoint(fromLonLat(coords)),
      });
      point.setStyle(
        new olStyle({
          image: new olIcon({
            src: mark,
            scale: 0.3,
          }),
        })
      );

      source.forEachFeature((f) => source.removeFeature(f));

      source.addFeature(point);
    });
  };

  return (
    <Map
      on
      onMapInit={onMapInit}
      style={{ width: "100%", maxWidth: "500px", height: "500px" }}
    />
  );
};

export default AdminMap;
