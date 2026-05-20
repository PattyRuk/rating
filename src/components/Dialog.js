import React from 'react';

function Dialog({ isOpen, onClose }) {
  if (isOpen===false) return null;

  return (
    <div className="dialog-overlay">
      <div className="dialog-content">
        <h3>Thank you for your feedback!</h3>
        <p>Your rating helps me improve.</p>
        <button className="btn-close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default Dialog;