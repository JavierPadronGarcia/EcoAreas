import { useState } from "react";
import Footer from "../../components/footer/Footer";
import NavigationBar from "../../components/navbar/NavigationBar";
import NewsCards from "../../components/newsCards/NewsCards";
import NewsService from "../../services/news.service";
import "./ModifyNews.css";

function ModifyNews() {

  const [photo, setPhoto] = useState(null);
  //this useState activate the useEffect in the component <NewsCards/> to update the view of the news
  const [recharge, setRecharge] = useState(false);

  const getPhoto = (event) => {
    event.preventDefault();
    setPhoto(event.target.files[0]);
    if (event.target.files[0] != null) {
      document.getElementById("image-name-preview").innerHTML = `imagen seleccionada: </br> ${event.target.files[0].name}`;
    }
  }

  const uploadNew = async (event) => {
    const validatorMessage = document.getElementById("form-validator-message");
    event.preventDefault();
    let id = null;
    let details = {};
    if (event.target.title.value === ""
      || event.target.textarea.value === ""
      || photo == null) {
      validatorMessage.style.display = "block";
    } else {
      validatorMessage.style.display = "none";
      let title = event.target.title.value;

      details = fillDetails(event.target.textarea.value.split('\n').filter(item => item !== ''));

      const DownloadURL = await NewsService.uploadImage(photo);
      //get the size of the inserted news to identify the id and insert the json
      NewsService.getNews().then(data => {
        id = data.size + 1;
        NewsService.addNew(details, id, DownloadURL, title);
        setPhoto(null);
        setRecharge(!recharge);
        resetForm();
        //show de message
        validatorMessage.innerHTML = `Noticia Agregada Correctamente`;
        validatorMessage.style.color = "green";
        validatorMessage.style.display = "block";
        setTimeout(() => {
          //hide and reset de message
          validatorMessage.style.display = "none";
          validatorMessage.innerHTML = `No puede haber ningún campo vacío`;
          validatorMessage.style.color = "rgb(154, 3, 3)";
        }, 3000);
      });
    }
  }

  const updateNew = async (event) => {
    let image = [];
    let details = {};
    const form = event.target.parentNode.parentNode;

    let key = form.newskey.value;
    let title = form.title.value;

    if (photo == null) {
      image[0] = form.imageurl.value;
      image[1] = form.imagename.value;
    } else {
      NewsService.removeImage(form.imagename.value);
      image = await NewsService.uploadImage(photo);
    }

    details = fillDetails(form.textarea.value.split('\n').filter(item => item !== ''));

    NewsService.updateNew(key, details, image, title)
    setRecharge(!recharge);
    resetForm();
  }

  const fillDetails = (Text) => {
    let DetailItem = {};

    Text.forEach((element, index) => {
      DetailItem[index] = element
    });

    return DetailItem
  }

  const resetForm = () => {
    document.getElementById("btn-add-new").style.display = "block";
    document.getElementById("btn-confirm-update").style.display = "none";
    document.getElementById("btn-no-update").style.display = "none";
    document.getElementById("image-name-preview").innerHTML = ``;
    document.querySelector(".form-container>form").reset();
  }

  return (
    <div className="container">
      <NavigationBar />
      <p id="form-validator-message">No puede haber ningún campo vacío</p>
      <div className="form-container">
        <form onSubmit={uploadNew}>
          <div className="image-select-container">
            <div className="image-select">
              <input type="file" id="photo" name="photo" onChange={getPhoto} accept="image/*" />
            </div>
            <p id="image-name-preview"></p>
          </div>
          <div className="form-inputs">
            <input placeholder="Escribe el titulo aquí" type="text" id="title" name="title" />
            <textarea placeholder="Escribe el contenido de la noticia aquí" name="textarea" id="text-area" rows={13} />
            <input type="hidden" name="newskey" id="news-key" />
            <input type="hidden" name="imageurl" id="image-url" />
            <input type="hidden" name="imagename" id="image-name" />
            <button id="btn-add-new" type="submit">Agregar noticia</button>
          </div>
          <div className="on-update-buttons">
            <button id="btn-confirm-update" type="button" onClick={updateNew}>Actualizar</button>
            <button id="btn-no-update" type="button" onClick={resetForm}>No actualizar</button>
          </div>
        </form>
      </div>

      <NewsCards recharge={recharge} />
      <Footer />
    </div>
  );

}

export default ModifyNews;