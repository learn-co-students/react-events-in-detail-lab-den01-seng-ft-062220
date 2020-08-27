import React from 'react';

export default function DelayedButton({ onDelayedClick, delay }) {

  return (
    <button onClick={(event) => {
      event.persist();
      window.setTimeout(() => onDelayedClick(event), delay)
    }}>
      Delayed Button
    </button>
  );
}