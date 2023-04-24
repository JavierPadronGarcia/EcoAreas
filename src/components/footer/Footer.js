import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import socialLinks from "../../services/socialLinks.service";
import React, { useState, useEffect } from 'react';
import "./footer.css";

function Footer() {

  const [link, setLink] = useState([]);

  const getLink = () => {
    const Link = socialLinks.getLinks();
    setLink(Link);
  }

  const showLinks = () => {
    return (
      <div className="social-network-links-container">
        {link.map((link) => (
          <div key={link.id} id="link-icon-container">
            <a href={link.ref}><FontAwesomeIcon icon={link.icon} id="link-icon" /></a>
          </div>
        ))}
      </div>
    );
  }

  useEffect(() => {
    getLink();
  }, []);

  return (
    <div className="main-footer">
      <div className="left-side-container">
        <div>
          <p>© Copyright de Contenido e imágenes</p>
        </div>
      </div>

      <div className="middle-side-container">
        <div className='contact-container'>
          <a href='/contact'>Contactanos</a>
        </div>
        {showLinks()}
      </div>

      <div className="right-side-container">
        <div id="cookies"><a href='/'>Cookies</a></div>
        <div id="privacy-policity"><a href='/'>Política de Privacidad</a></div>
      </div>
    </div>
  );
}

export default Footer;