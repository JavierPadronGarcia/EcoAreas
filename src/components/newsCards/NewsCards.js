import React, { useState, useEffect } from 'react';
import newsContent from '../../services/news.service';
import "./newsCards.css";
import CardForNews from '../CardsForNews/CardForNews';


function NewsCards() {

  const [cards, setCards] = useState([]);

  const getCards = () => {
    const Cards = newsContent.getNews();
    setCards(Cards);
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
    <div className="News-container">
      {showCards()}
    </div>
  );
}



export default NewsCards;