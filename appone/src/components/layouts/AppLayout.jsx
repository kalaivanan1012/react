import React, { useState } from 'react';
import '../../styles/AppLayout.css';
import '../../index.css';
import { Home } from '../Home';
import { Members } from '../Members';

function AppLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  let fonts="fonts";
  return (
    <>
      <div className="banner">
        <div className="navbar">
          <div className={`navbar-left ${menuOpen ? 'show' : ''}`}>
            <ul className={fonts}>
              <li>
                    Home
              </li>
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
      <div className='page'>
        <Home/>
        
      </div>
    </>
  );
}

export default AppLayout;
