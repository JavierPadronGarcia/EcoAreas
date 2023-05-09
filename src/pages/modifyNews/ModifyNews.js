import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";
import NewsService from "../../services/news.service";

function ModifyNews() {

  const [photo, setPhoto] = useState(null);


  const getPhoto = (event) => {
    event.preventDefault();
    setPhoto(event.target.files[0])
  }

  const uploadNew = async (event) => {
    event.preventDefault();
    //divide the text if encounters \n and don't take empty lines
    const text = event.target.textarea.value.split('\n').filter(item => item !== '');
    const DownloadURL = await NewsService.uploadImage(photo);
  }


  return (
    <div className="container">
      <NavigationBar />
      <div>
        <form onSubmit={uploadNew}>
          <label for="photo">Imagen: </label>
          <input type="file" id="photo" name="photo" onChange={getPhoto} />
          <textarea name="textarea" rows="10" cols="50" />
          <button type="submit">Agregar noticia</button>
        </form>
      </div>
      <NewsCards />
      <Footer />
    </div>
  );

}

export default ModifyNews;