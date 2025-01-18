import React from "react";
import Modal from "./Modal";

const MissionModal = ({ isOpen, onClose, coordinates }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Mission Planner">
      <table>
        <thead>
          <tr>
            <th>WP</th>
            <th>Coordinates</th>
          </tr>
        </thead>
        <tbody>
          {coordinates.map((coord, index) => (
            <tr key={index}>
              <td>WP{index + 1}</td>
              <td>{coord.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Modal>
  );
};

export default MissionModal;
