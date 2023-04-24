const SpliderNewsService = [
    {
        id: 1,
        img: "Noticia-1.png",
        text: `Organizamos una jornada de sensibilización y limpieza en la Playa de Los Cancajos`
    }, {
        id: 2,
        img: "Noticia-2.png",
        text: `Ecoáreas conciencia sobre la contaminación lumínica en La Gomera con una actividad de observación`
    }, {
        id: 3,
        img: "Noticia-3.png",
        text: `Las Playitas de Fuerteventura se suma a la Red de Áreas Ecoturísticas de Canarias`
    }, {
        id: 4,
        img: "Noticia-4.png",
        text: `Ecoáreas Mardetodos lleva a cabo en El Hierro y La Gomera iniciativas para preservar el litoral`
    }
];

const getNews = () => {
    return SpliderNewsService;
}

export default {
    getNews
};