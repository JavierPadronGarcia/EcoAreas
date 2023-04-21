import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faWifi } from "@fortawesome/free-solid-svg-icons";

const socialLinks = [
    {
        id: 1,
        icon: faFacebook
    }, {
        id: 2,
        icon: faTwitter
    }, {
        id: 3,
        icon: faYoutube
    }, {
        id: 4,
        icon: faInstagram
    }, {
        id: 5,
        icon: faWifi
    }
];

const getLinks = () => {
    return socialLinks;
}

export default {
    getLinks
};