
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
      <div className="empty-space">

      </div>
      <Footer />
    </div>

    /*
    <blockquote class="twitter-tweet">
    <p lang="es" dir="ltr">Un grupo de alumnos del centro educativo de San Cristóbal, en <a href="https://twitter.com/hashtag/LasPalmasdeGranCanaria?src=hash&amp;ref_src=twsrc%5Etfw">#LasPalmasdeGranCanaria</a>,
     ha puesto en marcha una ruta por el barrio para defender su patrimonio inmaterial
     <br>
     <br>Los primeros en disfrutar de este <a href="https://twitter.com/hashtag/turismo?src=hash&amp;ref_src=twsrc%5Etfw">#turismo</a> 
     marinero piloto han sido estudiantes daneses de <a href="https://twitter.com/hashtag/Erasmus?src=hash&amp;ref_src=twsrc%5Etfw">#Erasmus
     </a> <a href="https://t.co/VoGcrPO6I7">pic.twitter.com/VoGcrPO6I7</a></p>&mdash; RTVC (@RTVCes) 
     <a href="https://twitter.com/RTVCes/status/1583120355228426242?ref_src=twsrc%5Etfw">October 20, 2022</a>
     </blockquote> 
     <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"/>
    */

  );
}

export default Homepage;