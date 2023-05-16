import React, { useState, useEffect } from 'react';
import newsContent from '../../services/news.service';
import CardForNews from '../cardsForNews/CardForNews';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import "./newsCards.css";

function NewsCards(props) {

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
    document.getElementById("form-validator-message").style.display = "none";
    newsContent.removeNew(key).then(() => {
      document.getElementById("scollBackButton").style.display = "none";
      getCards();
      newsContent.removeImage(image[1]);
    });
  }

  const putInfoInTheForm = (key) => {
    document.getElementById("btn-confirm-update").style.display = "block";
    document.getElementById("form-validator-message").style.display = "none";
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

      document.getElementById("image-name-preview").innerHTML = `Si no selecciona una imagen, se usará la misma que ya está`;
      document.getElementsByClassName("form-container")[0].scrollIntoView({ behavior: "smooth" });
      document.getElementById("btn-add-new").style.display = "none";
      document.getElementById("btn-no-update").style.display = "block";
    });
  }

  const showCards = () => {
    return (
      <div className='news-cards'>
        {
          cards.map((news) => (
            <div>
              <CardForNews ident={news.key} image={news.img} text={news.text} key={news.key} />
              <div className='buttons-container'>
                <button id='delete-button' onClick={() => removeNew(news.key, news.img)}><FontAwesomeIcon icon={faTrashCan} id='delete-icon' /></button>
                <button id='update-button' onClick={() => putInfoInTheForm(news.key)}><FontAwesomeIcon icon={faPencil} id='update-icon' /></button>
              </div>
            </div>
          ))}
      </div>
    );
  }

  useEffect(() => {
    getCards();
  }, []);

  useEffect(() => {
    getCards();
  }, [props.recharge]);

  return (
    <div>
      <div className="news-container">
        {showCards()}
      </div>
    </div>
  );
}

export default NewsCards;