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
          text: item.val().text
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
            <CardForNews ident={news.id} image={news.img} text={news.text} linkRef="/" />
          ))}
      </div>
    );
  }

  useEffect(() => {
    getCards();
  }, []);

  return (
    <div className="news-container">
      {showCards()}
    </div>
  );
}

export default NewsCards;