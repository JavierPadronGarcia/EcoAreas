import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";
import NewsService from "../../services/news.service";
import "./ModifyNews.css";

function ModifyNews() {

  const [photo, setPhoto] = useState(null);

  const getPhoto = (event) => {
    event.preventDefault();
    setPhoto(event.target.files[0]);
  }

  const uploadNew = async (event) => {
    event.preventDefault();
    let details = {};
    let text = [];
    let id = null;

    let title = event.target.title.value;
    //divide the textArea if encounters \n and don't take empty lines
    text = event.target.textarea.value.split('\n').filter(item => item !== '');

    const DownloadURL = await NewsService.uploadImage(photo);
    //fill the details in a json to insert it in the main json
    text.forEach((element, index) => {
      details[index] = element
    });
    //get the size of the inserted news to identify the id and insert the json
    NewsService.getNews().then(data => {
      id = data.size + 1;
      NewsService.addNew(details, id, DownloadURL, title);
      setPhoto(null);
    });
  }

  const updateNew = async (event) => {
    event.preventDefault();
    let details = {};
    let text = [];
    let image = [];
    const form = event.target.parentNode;

    let key = form.newskey.value;
    let title = form.title.value;

    if (photo == null) {
      image[0] = form.imageurl.value;
      image[1] = form.imagename.value;
    } else {
      image = await NewsService.uploadImage(photo);
    }

    text = form.textarea.value.split('\n').filter(item => item !== '');

    text.forEach((element, index) => {
      details[index] = element
    });

    console.log(image);

    NewsService.updateNew(key, details, image, title);
  }

  const noUpdateNew = () => {
    document.getElementById("btn-agregar-noticia").style.display = "block";
    document.getElementById("btn-confirmar-actualizacion").style.display = "none";
    document.getElementById("btn-no-actualizar").style.display = "none";
    document.querySelector(".form-container>form").reset();
  }

  return (
    <div className="container">
      <NavigationBar />
      <div className="form-container">
        <form onSubmit={uploadNew}>
          <label for="photo">Imagen: </label>
          <input type="file" id="photo" name="photo" onChange={getPhoto} />
          <label for="title">Titular: </label>
          <input type="text" id="title" name="title" />
          <label for="textarea">Contenido: </label>
          <textarea name="textarea" id="text-area" rows="10" cols="50" />
          <input type="hidden" name="newskey" id="news-key" />
          <input type="hidden" name="imageurl" id="image-url" />
          <input type="hidden" name="imagename" id="image-name" />
          <button id="btn-agregar-noticia" type="submit">Agregar noticia</button>
          <button id="btn-confirmar-actualizacion" type="button" onClick={updateNew}>Actualizar</button>
          <button id="btn-no-actualizar" type="button" onClick={noUpdateNew}>No actualizar</button>
        </form>
      </div>
      <NewsCards />
      <Footer />
    </div>
  );

}

export default ModifyNews;