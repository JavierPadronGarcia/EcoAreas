import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import newsSpliderService from '../../services/newsSplider.service';
import "./NewsSplider.css";

function NewsSplider() {

  const [splider, setSplider] = useState([]);

  const getSplider = () => {
    const Splider = newsSpliderService.getNews();
    setSplider(Splider);
  }

  const showSplider = () => {
    return (
      <Splide hasTrack={false} id='splide-container'>
        <SplideTrack>
          {splider.map((news) => (
            <SplideSlide className='splide-slide'>
              <div className='news-container'>
                <div id='image-container'>
                  <img src={`/assets/img/${news.img}`} />
                </div>
                <div id='text-container'>{news.text}</div>
                <div id='link-news'><a href='/'>Ir a la noticia</a></div>
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
    <div className="splider-container">
      {showSplider()}
    </div>
  );
}



export default NewsSplider;