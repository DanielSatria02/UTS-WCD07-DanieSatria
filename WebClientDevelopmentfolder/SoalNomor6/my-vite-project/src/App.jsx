import React, { useContext, useEffect } from 'react';
import Header from './Header';
import { DetailsContext } from './DetailsContext';
import './index.css';

export default function App() {
  const { showDetails, setShowDetails } = useContext(DetailsContext);
  const [columnLayout, setColumnLayout] = React.useState(2);

  const handleImageClick = () => {
    // Save the current scroll position before navigating
    sessionStorage.setItem('scrollPosition', window.scrollY);
    setShowDetails(true); 
  };

  const handleBackClick = () => {
    setShowDetails(false);
  };

  const toggleColumnLayout = () => {
    setColumnLayout((prev) => (prev === 2 ? 1 : 2));
  };

  useEffect(() => {
    // Restore the scroll position when returning to the home page
    if (!showDetails) {
      const savedScrollPosition = sessionStorage.getItem('scrollPosition');
      if (savedScrollPosition) {
        window.scrollTo(0, parseInt(savedScrollPosition, 10));
      }
    }
  }, [showDetails]);

  return (
    <div className="container">
      <Header onBackClick={handleBackClick} /> {/* Pass the back click handler */}
      <div className="top-border"></div>
      {showDetails ? (
        <div className="details-page">
          <img src="/bulbasaursprite.jpeg" alt="Bulbasaur Sprite" className="image" />
          <img src="/bubasaurstats.jpeg" alt="Bulbasaur Stats" className="image stats-image" />
        </div>
      ) : (
        <>
          <div className="sort-buttons">
          {/* Dropdown for sorting */}
            <select
              className="sort-dropdown"
              onChange={(e) => {
                const selectedValue = e.target.value;
                console.log(`Select sort option: ${selectedValue}`);
                // Add sorting logic here based on selectedValue
              }}
            >
              <option value="default">Sort by</option>
            </select>
            {/* Existing toggle column layout button */}
            <button className="sort-button" onClick={toggleColumnLayout}>
              {columnLayout === 2 ? 'Sort by one' : 'Sort by two'}
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