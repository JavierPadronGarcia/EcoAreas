import { ref, get, remove, push } from "firebase/database";
import database from "../firebase";

const carouselRef = ref(database, "/CarouselImages");

const getCarousel = () => {
    return get(carouselRef);
}

export default {
    getCarousel
};