import carruselImagesService from "../../services/carruselImages.service";
import React, { useState, useEffect } from 'react';
import "./imageCarrusel.css";

function ImageCarrusel() {

  const [carrusel, setCarrusel] = useState([]);

  const getCarrusel = () => {
    const Carrusel = carruselImagesService.getImages();
    setCarrusel(Carrusel);
  }

  const showCarrusel = () => {
    return (
      <div>
          {carrusel.map((image) => (
            <div key={image.id} className="image-container">
              <img src={`/assets/img/${image.img}`} alt="carruselImg" id="image-item" />
            </div>
          ))}
        <div>
        </div>
      </div>
    );

  }

  useEffect(() => {
    getCarrusel();
  }, []);

  return (
    showCarrusel()
  );
}

export default ImageCarrusel;
