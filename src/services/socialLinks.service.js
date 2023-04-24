import { faFacebook, faInstagram, faTwitter, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
  {
    id: 1,
    icon: faFacebook,
    ref: "https://www.facebook.com/ecoareas"
  }, {
    id: 2,
    icon: faTwitter,
    ref: "https://twitter.com/ecoareas"
  }, {
    id: 3,
    icon: faYoutube,
    ref: "https://www.youtube.com/channel/UCQb_yo9B1Mvq8HcuyMTn9IQ"
  }, {
    id: 4,
    icon: faInstagram,
    ref: "https://www.instagram.com/ecoareas_mardetodos/"
  }, {
    id: 5,
    icon: faGithub,
    ref: "https://github.com/JavierPadronGarcia/EcoAreas",
  }, {
    id: 6,
    icon: faWifi,
    ref: "https://www.ecoareasmardetodos.org/blog-feed.xml"
  }
];

const getLinks = () => {
  return socialLinks;
}

export default {
  getLinks
};