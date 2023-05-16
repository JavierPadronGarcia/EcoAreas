import React, { useState, useEffect } from 'react';
import newsContent from '../../services/news.service';
import CardForNews from '../cardsForNews/CardForNews';
import "./AsideCardsForNews.css";

function AsideCardsForNews() {

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

  const showCards = () => {
    return (
      <div className='aside-news-cards'>
        {
          cards.map((news) => (
            <div>
              <CardForNews ident={news.key} image={news.img} text={news.text} key={news.key} />
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
      <div className="aside-news-container">
        {showCards()}
      </div>
    </div>
  );
}

export default AsideCardsForNews;