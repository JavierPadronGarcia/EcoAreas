import { ref, get } from "firebase/database";
import db from "../firebase";

const carouselRef = ref(db.database, "/CarouselImages");

const getCarousel = () => {
    return get(carouselRef);
}

export default {
    getCarousel
};