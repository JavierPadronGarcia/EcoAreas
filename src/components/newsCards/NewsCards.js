import React, { useState, useEffect } from 'react';
import newsContent from '../../services/news.service';
import "./newsCards.css";
import CardForNews from '../cardsForNews/CardForNews';

function NewsCards() {

  const [cards, setCards] = useState([]);

  const getCards = () => {
    newsContent.getNews().then(data => {
      let allNews = [];
      data.forEach(item => {
        allNews.push({
          id: item.val().id,
          img: item.val().img,
          text: item.val().text,
          details: item.val().details
        })
      })
      setCards(allNews);
    })
  }

  const showCards = () => {
    return (
      <div className='news-cards'>
        {
          cards.map((news) => (
            <CardForNews ident={news.id} image={news.img} text={news.text} />
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
            <p>{news.details}</p>
          </div>
        ))}
        <button onClick={newsContent.scrollBack} id='scollBackButton'>volver</button>
      </div>
    </div>
  );
}

export default NewsCards;