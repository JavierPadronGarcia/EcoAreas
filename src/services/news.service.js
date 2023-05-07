import { ref, get } from "firebase/database";
import database from "../firebase";

const newsRef = ref(database, "/News");

const getNews = () => {
    return get(newsRef);
}

const scrollBack = () => {
    document.getElementsByClassName("news-container")[0].parentNode.scrollIntoView({ behavior: "smooth" });
}

export default { getNews, scrollBack };