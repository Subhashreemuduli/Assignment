import React, { useEffect, useRef } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import { Draw } from "ol/interaction";

const MapComponent = ({ onDrawComplete, onPolygonInsert }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer({ source: vectorSource });

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
        vectorLayer,
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });

    const drawLine = new Draw({
      source: vectorSource,
      type: "LineString",
    });

    drawLine.on("drawend", (event) => {
      const coordinates = event.feature.getGeometry().getCoordinates();
      onDrawComplete(coordinates);
    });

    map.addInteraction(drawLine);

    return () => map.setTarget(null);
  }, [onDrawComplete, onPolygonInsert]);

  return <div ref={mapRef} style={{ height: "500px", width: "100%" }}></div>;
};

export default MapComponent;
