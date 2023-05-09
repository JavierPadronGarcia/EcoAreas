import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import newsContent from '../../services/news.service';
import CardForNews from '../cardsForNews/CardForNews';
import "./NewsSplider.css";

function NewsSplider() {

  const [splider, setSplider] = useState([]);

  const getSplider = () => {
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
      setSplider(allNews);
    })
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

  const selectedCards = splider.slice(0, 4);

  const showSplider = () => {

    return (
      <Splide id='splide-container' hasTrack={false} options={splideOptions}>
        <SplideTrack>
          {selectedCards.map((news) => (
            <SplideSlide className='splide-slide' key={news.id}>
              <CardForNews className='card-splider' ident={news.id} image={news.img} text={news.text} />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    );
  }

  useEffect(() => {
    getSplider();
  }, []);

  const putDetails = (Object) => {

    // console.log(Object.length);
    // console.log(Object.part1)
    //console.log(`${Object.part1}`)
    console.log();


    let completeText = "";
    for (let index = 0; index < Object.length; index++) {
      console.log(Object[index])
      return (<p>{Object[index]}</p>);
    }

    return completeText;

  }

  return (
    <div className="relevant-news">
      <div className="relevant-news-title">
        <p id='title-text'>Noticias relevantes</p>
        <p id='instructions'>Deslice para ver más</p>
      </div>
      <div className="news-container">
        {showSplider()}
      </div>
      <div id="news-details">
        {selectedCards.map((news) => (
          <div key={news.id} className={`button${news.id}`}>
            <h2>{news.text}</h2>
            {
              putDetails(news.details)
            }
          </div>
        ))}
        <button onClick={newsContent.scrollBack} id="scollBackButton">volver</button>
      </div>
    </div>
  );
}



export default NewsSplider;