import "./navigationBar.css";
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [Icon, setIcon] = useState(faBars);

  const handleToggle = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      setIcon(faXmark);
    } else {
      setIcon(faBars);
    }
  };

  return (
    <>
      <div className="navbar" id="navbar">

        <div className="navbar-brand">
          <a href="/" className="navbar-logo">Ecoáreas</a>
        </div>

        <div className="button-container">
          <button className='navbar-toggle' onClick={handleToggle}>
            <FontAwesomeIcon icon={Icon} id="button-icon" />
          </button>
        </div>

        <div className={`navbar-menu${isOpen ? 'open' : ''}`}>
          <div className="navbar-item">
            <div className="homepage">
              <a href="/" className="navbar-link">Inicio</a>
            </div>
            <div className="newspage">
              <div><a href="/news" className="navbar-link">Noticias</a></div>
            </div>
            <div className="aboutpage">
              <div><a href="/about" className="navbar-link">El Proyecto</a></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default NavigationBar;