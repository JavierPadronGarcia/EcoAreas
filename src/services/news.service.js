import { ref, get } from "firebase/database";
import db from "../firebase";

const newsRef = ref(db.database, "/News");

const getNews = () => {
    return get(newsRef);
}

const scrollBack = () => {
    document.getElementsByClassName("news-container")[0].parentNode.scrollIntoView({ behavior: "smooth" });
}

export default { getNews, scrollBack };