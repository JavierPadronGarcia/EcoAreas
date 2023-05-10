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

  const showCards = () => {
    return (
      <div className='news-cards'>
        {
          cards.map((news) => (
            <div>
              <CardForNews ident={news.id} image={news.img} text={news.text} key={news.key} />
              <button id='deleteButton' onClick={() => removeNew(news.key, news.img)}>eliminar</button>
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