
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
      <Footer />
    </div>

  );
}

export default Homepage;