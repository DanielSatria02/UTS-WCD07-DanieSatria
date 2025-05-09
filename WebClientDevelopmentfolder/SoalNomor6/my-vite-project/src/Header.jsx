import React, { useContext } from 'react';
import { DetailsContext } from './DetailsContext';
import './index.css';

export default function Header() {
  const { setShowDetails } = useContext(DetailsContext);

  return (
    <header className="header">
      <div className="header-background"></div>
      <button className="pokemon-back-button" onClick={() => setShowDetails(false)}>
        <img className="Pokemon" src="/Pokemon.png" alt="Pokemon Logo" />
      </button>
      <img className="magnify-icon" src="/magnify.png" alt="Magnify Icon" />
    </header>
  );
}