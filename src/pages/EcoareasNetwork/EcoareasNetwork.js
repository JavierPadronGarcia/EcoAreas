import Map from "../../components/Map/Map";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import TwitterTweet from "../../components/twitterTweet/TwitterTweet";
import mapMarkers from "../../services/mapmarkers.service";
import "./EcoareasNetwork.css";
function EcoareasNetwork() {
  const currentMarkers = mapMarkers();
  return (
    <div className="container">
      <NavigationBar />
      <div className="map-title">RED CANARIA DE ÁREAS ECOTURÍSTICAS LITORALES</div>
      <div className="map-container">
        <Map markers={currentMarkers} />
      </div>
      <TwitterTweet />
      <Footer />
    </div>
  );
}

export default EcoareasNetwork;