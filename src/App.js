import React, { useState } from 'react';
import StarRating from './components/StarRating';
import Dialog from './components/Dialog';

function App() {
  const [isDialog, setIsDialog] = useState(false);

  const openDialog = () => setIsDialog(true);
  const closeDialog = () => setIsDialog(false);

  return (
    <div className="app-container">
      <h1>Rate My Project</h1>
      <StarRating />
      <button className="btn-submit" onClick={openDialog}>
        Submit Review
      </button>
      <Dialog isOpen={isDialog} onClose={closeDialog} />
    </div>
  );
}

export default App;