import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";

function ModifyNews() {

  const [photo, setPhoto] = useState(null);


  const getPhoto = (event) => {
    event.preventDefault();
    setPhoto(event.target.files[0])
  }


  return (
    <div className="container">
      <NavigationBar />
      <div>
        <form>
          <label for="photo">Imagen: </label>
          <input type="file" id="photo" name="photo" onChange={getPhoto} />
        </form>
      </div>
      <NewsCards />
      <Footer />
    </div>
  );

}

export default ModifyNews;