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
        <div className="top-side-container">

        </div>
        {showLinks()}
      </div>

      <div className="right-side-container">

      </div>


    </div>
  );
}

export default Footer;