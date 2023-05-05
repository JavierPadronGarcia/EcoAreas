import { ref, get } from "firebase/database";
import database from "../firebase";

const newsRef = ref(database, "/News");

const getNews = () => {
    return get(newsRef);
}

export default { getNews };