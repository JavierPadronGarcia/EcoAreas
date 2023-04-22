
import NewsSplider from "../../components/NewsSplider/NewsSplider";
import Footer from "../../components/footer/Footer";
import ImageCarrusel from "../../components/imageCarousel/ImageCarousel";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Homepage.css";

function Homepage() {
  return (

    <div className="container">
      {/* Header */}
      <NavigationBar />
      <ImageCarrusel />
      <div className="relevant-news">
        <div className="relevant-news-title">
          <p>Noticias relevantes</p>
        </div>
        <div className="splider">
          <NewsSplider />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Homepage;