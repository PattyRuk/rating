import React from 'react';
import { FaStar } from 'react-icons/fa';

function Star({ selected, onClick }) {
  return (
    <FaStar
      className="star-icon"
      color={selected ? 'var(--selected)' : 'var(--secondary)'}
      size={60}
      onClick={onClick}
    />
  );
}

export default Star;