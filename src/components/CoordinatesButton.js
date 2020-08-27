import React from 'react';

export default function CoordinatesButton({ onReceiveCoordinates }) {
  return (
    <button onClick={(event) => onReceiveCoordinates([event.clientX, event.clientY])}>
      Log my Coordinates
    </button>
  );
}