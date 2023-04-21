import carruselImagesService from "../../services/carruselImages.service";
import React, { useState, useEffect } from 'react';
import "./imageCarousel.css";

function ImageCarrusel() {

  const [carrusel, setCarrusel] = useState([]);

  const getCarrusel = () => {
    const Carrusel = carruselImagesService.getImages();
    setCarrusel(Carrusel);
  }

  const showCarrusel = () => {
    return (
      <ul>
        {carrusel.map((image) => (
          <li key={image.id}>
            <img src={`/assets/img/${image.img}`} alt="carruselImg" />
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
