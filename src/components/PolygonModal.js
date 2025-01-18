import React from "react";
import Modal from "./Modal";

const PolygonModal = ({ isOpen, onClose, coordinates }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Polygon Planner">
      <table>
        <thead>
          <tr>
            <th>Point</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {coordinates.map((coord, index) => (
            <tr key={index}>
              <td>Point {index + 1}</td>
              <td>{coord.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};

export default PolygonModal;
