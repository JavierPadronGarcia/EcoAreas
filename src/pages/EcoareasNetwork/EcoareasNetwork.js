import { useState } from "react";
import Map from "../../components/map/Map";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import TwitterTweet from "../../components/twitterTweet/TwitterTweet";
import mapMarkers from "../../services/mapmarkers.service";
import "./EcoareasNetwork.css";

function EcoareasNetwork() {
  const [markers, setMarkers] = useState([]);

  const getMarkers = () => {
    mapMarkers.getMapMarkers().then(data => {
      let allMarkers = [];
      data.forEach(item => {

        allMarkers.push({
          description: item.val().description,
          latitude: item.val().latitude,
          longitude: item.val().longitude,
          title: item.val().title
        })
      });
      setMarkers(allMarkers);
    })
  }

  getMarkers();

  return (
    <div className="container">
      <NavigationBar />
      <div className="map-title">RED CANARIA DE ÁREAS ECOTURÍSTICAS LITORALES</div>
      <div className="map-container">
        <Map markers={markers} />
      </div>
      <TwitterTweet />
      <Footer />
    </div>
  );

}

export default EcoareasNetwork;