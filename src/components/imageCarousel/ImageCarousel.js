import carruselImagesService from "../../services/carruselImages.service";
import React, { useState, useEffect } from 'react';
import "./imageCarousel.css";

function ImageCarrusel() {

  const [carrusel, setCarrusel] = useState([]);

  const getCarrusel = () => {
    carruselImagesService.getCarousel().then(data => {
      let allCarousel = [];
      data.forEach(item => {
        allCarousel.push({
          id: item.val().id,
          img: item.val().img,
          text: item.val().text
        })
      });
      setCarrusel(allCarousel);
    })
  }

  const showCarrusel = () => {
    return (
      <ul>
        {carrusel.map((image) => (
          <li key={image.id}>
            <img src={`/assets/img/Carousel/${image.img}`} alt={`carouselImg-${image.id}`} />
            <p>{image.text}</p>
          </li>
        ))}
      </ul>
    );
  }

  useEffect(() => {
    getCarrusel();
  }, []);

  return (
    <div className="image-container">
      {showCarrusel()}
    </div>
  );
}

export default ImageCarrusel;
