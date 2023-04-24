import React, { useState, useEffect } from 'react';
import newsCards from '../../services/news.service';
import "./newsCards.css";


function NewsCards() {

  const [cards, setCards] = useState([]);

  const getCards = () => {
    const Cards = newsCards.getNews();
    setCards(Cards);
  }

  const showCards = () => {
    return (
      <div className='news-cards'>
        {
          cards.map((news) => (
            <div key={news.id} className='new-card'>
              <div id='card-image-container'>
                <img src={`/assets/img/news/${news.img}`} alt='SpliderImg' />
              </div>
              <div id='card-text-container'>
                <div>{news.text}</div>
                <div id='link-news'><a href='/' id="link">Ir a la noticia</a></div>
              </div>
            </div>
          ))}
      </div>
    );
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="News-container">
      {showCards()}
    </div>
  );
}



export default NewsCards;