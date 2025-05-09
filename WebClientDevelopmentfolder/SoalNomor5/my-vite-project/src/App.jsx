import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [showDetails, setShowDetails] = useState(false);
  const [columnLayout, setColumnLayout] = useState(2); // State to track column layout (1 or 2)

  const handleImageClick = () => {
    setShowDetails(true);
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  const toggleColumnLayout = () => {
    setColumnLayout((prev) => (prev === 2 ? 1 : 2)); // Toggle between 1 and 2 columns
  };

  return (
    <div className="container">
      <div className="header">
        <h3 className="h3">Pokemon</h3>
      </div>
      <div className="top-border"></div>
      {showDetails ? (
        <div className="details-page">
          <button className="back-button" onClick={handleBackClick}>
            Back
          </button>
          <img src="/bulbasaursprite.jpeg" alt="Bulbasaur Sprite" className="image" />
          <img src="/bubasaurstats.jpeg" alt="Bulbasaur Stats" className="image stats-image" />
        </div>
      ) : (
        <>
          <div className="sort-buttons">
            <button className="sort-button" onClick={toggleColumnLayout}>
              {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
            </button>
            <button className="sort-button" onClick={toggleColumnLayout}>
            {columnLayout === 2 ? 'Sort by one' : 'sort by two'}
            </button>
          </div>
          <div className={`grid ${columnLayout === 1 ? 'one-column' : 'two-columns'}`}>
            {Array(8).fill(null).map((_, index) => (
              <img
                key={index}
                src="/bulbasaur.jpeg"
                alt="Bulbasaur"
                className="image"
                onClick={handleImageClick}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}