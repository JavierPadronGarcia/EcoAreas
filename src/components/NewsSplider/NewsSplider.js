import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import newsContent from '../../services/news.service';
import CardForNews from '../CardsForNews/CardForNews';
import "./NewsSplider.css";

function NewsSplider() {

  const [splider, setSplider] = useState([]);

  const getSplider = () => {
    const Splider = newsContent.getNews();
    setSplider(Splider);
  }

  const splideOptions = {
    type: "",
    perPage: 2,
    padding: "1rem",
    breakpoints: {
      768: {
        perPage: 1,
      },
    }
  }

  const showSplider = () => {
    const selectedCards = splider.slice(0, 4);

    return (
      <Splide id='splide-container' hasTrack={false} options={splideOptions}>
        <SplideTrack>
          {selectedCards.map((news) => (
            <SplideSlide className='splide-slide'>
              <CardForNews className='card-splider' id={news.id} ident={news.id} image={news.img} text={news.text} linkRef="/" />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    );
  }

  useEffect(() => {
    getSplider();
  }, []);

  return (
    <div className="relevant-news">
      <div className="relevant-news-title">
        <p id='title-text'>Noticias relevantes</p>
        <p id='instructions'>Deslice para ver más</p>
      </div>
      <div className="splider-container">
        {showSplider()}
      </div>
    </div>
  );
}



export default NewsSplider;