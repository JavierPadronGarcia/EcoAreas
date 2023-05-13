import { faFacebook, faInstagram, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="left-side-container">
        <div>
          <p>© Copyright de Contenido e imágenes</p>
        </div>
      </div>

      <div className="middle-side-container">
        <div className="social-network-links-container">
          <div id="link-icon-container">
            <a href="https://www.facebook.com/ecoareas"><FontAwesomeIcon icon={faFacebook} id="link-icon" /></a>
          </div>
          <div id="link-icon-container">
            <a href="https://twitter.com/ecoareas"><FontAwesomeIcon icon={faTwitter} id="link-icon" /></a>
          </div>
          <div id="link-icon-container">
            <a href="https://www.youtube.com/channel/UCQb_yo9B1Mvq8HcuyMTn9IQ"><FontAwesomeIcon icon={faYoutube} id="link-icon" /></a>
          </div>
          <div id="link-icon-container">
            <a href="https://www.instagram.com/ecoareas_mardetodos/"><FontAwesomeIcon icon={faInstagram} id="link-icon" /></a>
          </div>
          <div id="link-icon-container">
            <a href="https://github.com/JavierPadronGarcia/EcoAreas"><FontAwesomeIcon icon={faGithub} id="link-icon" /></a>
          </div>
          <div id="link-icon-container">
            <a href="\assets\rss.xml"><FontAwesomeIcon icon={faWifi} id="link-icon" /></a>
          </div>
        </div >
      </div>

      <div className="right-side-container">
        <div id="cookies"><div><a href='/politics'>Cookies</a></div></div>
        <div id="privacy-policity"><div><a href='/politics'>Política de Privacidad</a></div></div>
      </div>
    </div>
  );
}

export default Footer;