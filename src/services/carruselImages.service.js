const carrouselImages = [
    {
        id: 1,
        img: "Carrusel-img-1.jpeg",
        text: `Ecoáreas-mardetodos es una iniciativa innovadora en economía azul que busca
        transformar el uso y la gestión de los espacios litorales hacia un modelo que
        premie y promueva prácticas sostenibles y responsables y gestión horizontal.`
    }, {
        id: 2,
        img: "Carrusel-img-2.jpeg",
        text: `Un proyecto impulsado y financiado por la Consejería de Turismo, Industria y 
        Comercio del Gobierno de Canarias, con la cofinanciación del Plan Avanza de los 
        fondos FEDER de la Unión Europea, basado en tres pilares: acuerdos voluntarios, 
        participación y gestión horizontal.`
    }, {
        id: 3,
        img: "Carrusel-img-3.jpeg",
        text: `En las Ecoáreas tu opinión y tu acción son de vital importancia. Te invitamos 
        a participar activamente en los procesos para el impulso de la Red Canaria de Áreas 
        Ecoturísticas Litorales.`
    }
];

const getImages = () => {
    return carrouselImages;
}

export default {
    getImages
};