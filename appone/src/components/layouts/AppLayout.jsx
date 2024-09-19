import React, { useState } from 'react';
import '../../styles/AppLayout.css';

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="banner">
        <div className="navbar">
          <div className={`navbar-left ${menuOpen ? 'show' : ''}`}>
            <ul>
              <li>Home</li>
              <li>Asset Management</li>
              <li>Project Management</li>
              <li>Members Management</li>
            </ul>
          </div>
          <div className="navbar-right"></div>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>
      <div>
        <h1>

                sooryavarman k
        </h1>
      </div>
    </>
  );
}

export default AppLayout;
