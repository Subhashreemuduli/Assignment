import React, { useState } from "react";
import MapComponent from "./components/MapComponent";
import MissionModal from "./components/MissionModal";
import PolygonModal from "./components/PolygonModal";

const App = () => {
  const [lineStringCoords, setLineStringCoords] = useState([]);
  const [polygonCoords, setPolygonCoords] = useState([]);
  const [missionModalOpen, setMissionModalOpen] = useState(false);
  const [polygonModalOpen, setPolygonModalOpen] = useState(false);

  const handleDrawComplete = (coordinates) => {
    setLineStringCoords(coordinates);
    setMissionModalOpen(true);
  };

  const handlePolygonInsert = (coords) => {
    setPolygonCoords(coords);
    setPolygonModalOpen(true);
  };

  return (
    <div>
      <h1>Interactive Mission Planner</h1>
      <MapComponent
        onDrawComplete={handleDrawComplete}
        onPolygonInsert={handlePolygonInsert}
      />
      <MissionModal
        isOpen={missionModalOpen}
        onClose={() => setMissionModalOpen(false)}
        coordinates={lineStringCoords}
      />
      <PolygonModal
        isOpen={polygonModalOpen}
        onClose={() => setPolygonModalOpen(false)}
        coordinates={polygonCoords}
      />
    </div>
  );
};

export default App;
