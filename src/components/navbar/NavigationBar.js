import "./navigationBar.css";

import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Icon, setIcon] = useState(faBars);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setIcon(faXmark);
      document.getElementById("navbar").style.height = "20vh";
    } else {
      setIcon(faBars);
      document.getElementById("navbar").style.height = "10vh";
    }
  };

  return (
    <>
      <nav className="navbar" id="navbar">

        <div className="navbar-brand">
          <a href="/" className="navbar-logo">Ecoáreas</a>
        </div>

        <div className="button-container">
          <button className='navbar-toggle' onClick={handleToggle}>
            <FontAwesomeIcon icon={Icon} id="button-icon" />
          </button>
        </div>

        <div className={`navbar-menu${isOpen ? 'open' : ''}`}>
          <div id="top-border"></div>
          <div className="navbar-item">
            <a href="/" className="navbar-link">Home</a>
            <span className="space-links"></span>
            <a href="/about" className="navbar-link">About</a>
            <span className="space-links"></span>
            <a href="/contact" className="navbar-link">Contact</a>
          </div>
        </div>

      </nav>
    </>
  );
};

export default NavigationBar;