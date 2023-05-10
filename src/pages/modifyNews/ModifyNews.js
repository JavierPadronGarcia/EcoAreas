import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";
import NewsService from "../../services/news.service";

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
    });
    //gs://ecoareas-3edd0.appspot.com/News
  }


  return (
    <div className="container">
      <NavigationBar />
      <div>
        <form onSubmit={uploadNew}>
          <label for="photo">Imagen: </label>
          <input type="file" id="photo" name="photo" onChange={getPhoto} />
          <label for="title">Titular: </label>
          <input type="text" id="title" name="title" />
          <label for="textarea">Contenido: </label>
          <textarea name="textarea" rows="10" cols="50" />
          <button type="submit">Agregar noticia</button>
          <button type="submit">Actualizar noticia</button>
        </form>
      </div>
      <NewsCards />
      <Footer />
    </div>
  );

}

export default ModifyNews;