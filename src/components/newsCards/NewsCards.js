import React, { useState, useEffect } from 'react';
import newsContent from '../../services/news.service';
import Details from '../details/Details';
import CardForNews from '../cardsForNews/CardForNews';
import "./newsCards.css";

function NewsCards() {

  const [cards, setCards] = useState([]);

  const getCards = () => {
    newsContent.getNews().then(data => {
      let allNews = [];
      data.forEach(item => {
        allNews.push({
          key: item.key,
          id: item.val().id,
          img: item.val().img,
          text: item.val().text,
          details: item.val().details
        })
      })
      setCards(allNews);
    })
  }

  const removeNew = (key, image) => {
    newsContent.removeNew(key).then(() => {
      getCards();
      newsContent.removeImage(image[1]);
    });
  }

  const putInfoInTheForm = (key) => {
    document.getElementById("btn-confirmar-actualizacion").style.display = "block";
    const form = document.querySelector(".form-container>form");

    form.newskey.value = key;

    newsContent.getOneNew(key).then(item => {
      let objectDetails = '';

      item.val().details.forEach(paragraph => {
        objectDetails += paragraph + '\n\n'
      })

      form.title.value = item.val().text
      form.textarea.value = objectDetails
      form.imageurl.value = item.val().img[0];
      form.imagename.value = item.val().img[1];

      document.getElementsByClassName("form-container")[0].scrollIntoView({ behavior: "smooth" });
      document.getElementById("btn-agregar-noticia").style.display = "none";
      document.getElementById("btn-no-actualizar").style.display = "block";
    });
  }

  const showCards = () => {
    return (
      <div className='news-cards'>
        {
          cards.map((news) => (
            <div>
              <CardForNews ident={news.id} image={news.img} text={news.text} key={news.key} />
              <button id='delete-button' onClick={() => removeNew(news.key, news.img)}>eliminar</button>
              <button id='update-button' onClick={() => putInfoInTheForm(news.key)}>Actualizar</button>
            </div>
          ))}
      </div>
    );
  }

  useEffect(() => {
    getCards();
  }, []);


  return (
    <div>
      <div className="news-container">
        {showCards()}
      </div>
      <div id="news-details">
        {cards.map((news) => (
          <div key={news.id} className={`button${news.id}`}>
            <h2>{news.text}</h2>
            <Details Object={news.details} />
          </div>
        ))}
        <button onClick={newsContent.scrollBack} id='scollBackButton'>volver</button>
      </div>
    </div>
  );
}

export default NewsCards;