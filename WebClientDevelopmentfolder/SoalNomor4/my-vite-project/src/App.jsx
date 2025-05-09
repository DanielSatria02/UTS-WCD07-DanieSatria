import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

const Homepage = () => {
  return (
    <div className="intropage">
      <main className="main">
        <div className="top-rectangle"></div>
        <button className="home-button">
          <Link to="/other-artworks">My Other Artworks & Contact info</Link>
        </button>
        <img src="/girlinred.jpeg" alt="Girl in Red" className="landing-image" />
      </main>
      <main classname="about">
        <h1 className="aboutme">About Me.</h1>
        <div className="loremipsum">
          <h3 className="mypainting">The artwork above is a painting of my creation!<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p></h3>
        </div>
      </main>
      <main classname="morestuff">
        <h1 className="aboutme">Other Stuff.</h1>
        <div className="loremipsum">
          <h2 className="titleofstuff">First.</h2>
        </div>
      </main>
      <footer>
        This was made possible by using Vite <img src="/vite.svg" alt="vite logo" className="vitelogo" />
      </footer>
    </div>
  );
}; 

const OtherArtworksPage = () => (
  <div className="other-artworks">
    <div className="top-rectangle"></div>
    <h1 className="text-aligned">My Other Artworks</h1>
    <p>Sorry but this page is a working progress!.<br />You can see my work on IG: <Link to="/">@dan.sa.turn</Link><br />Contact my Email: danielbussiness2000@gmail.com</p>
    <Link to="/">Go Back to Home</Link>
    <footer>
      This was made possible by using Vite <img src="/vite.svg" alt="vite logo" className="vitelogo" />
    </footer>
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/other-artworks" element={<OtherArtworksPage />} />
      </Routes>
    </Router>
  );
};

export default App;