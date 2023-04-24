import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import newsSpliderService from '../../services/news.service';
import "./NewsSplider.css";


function NewsSplider() {

  const [splider, setSplider] = useState([]);

  const getSplider = () => {
    const Splider = newsSpliderService.getNews();
    setSplider(Splider);
  }

  const showSplider = () => {
    const selectedCards = splider.slice(0, 3);
    return (
      <Splide hasTrack={false} id='splide-container'>
        <SplideTrack>
          {selectedCards.map((news) => (
            <SplideSlide className='splide-slide'>
              <div className='news-container'>
                <div id='image-container'>
                  <img src={`/assets/img/news/${news.img}`} alt='SpliderImg' />
                </div>
                <div id='text-container'>{news.text}</div>
                <div id='link-news'><a href='/' id="link">Ir a la noticia</a></div>
              </div>
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