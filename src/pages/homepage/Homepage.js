
import NewsSplider from "../../components/NewsSplider/NewsSplider";
import Footer from "../../components/footer/Footer";
import ImageCarrusel from "../../components/imageCarousel/ImageCarousel";
import NavigationBar from "../../components/navbar/NavigationBar";
import "./Homepage.css";

function Homepage() {
  return (
    <div className="container">
      <NavigationBar />
      <ImageCarrusel />
      <NewsSplider />
      <Footer />
    </div>
  );
}

export default Homepage;