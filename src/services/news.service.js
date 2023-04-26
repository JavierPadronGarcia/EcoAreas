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
    }, {
        id: 5,
        img: "Noticia-5.png",
        text: `Ecoáreas promueve el astroturismo con una actividad de observación de estrellas en La Laja`
    }, {
        id: 6,
        img: "Noticia-6.png",
        text: `Ecoáreas Mardetodos presenta el plan de acción del proyecto palmero de Los Cancajos`
    }
];

const getNews = () => {
    return SpliderNewsService;
}

export default {
    getNews
};