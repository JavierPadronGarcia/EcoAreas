import { ref, get, push } from "firebase/database";
import { uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";
import db from "../firebase";

const newsRef = ref(db.database, "/News");


const getNews = () => {
    return get(newsRef);
}

const uploadImage = async (image) => {
    const storageRef = Sref(db.storage, "hola");
    await uploadBytes(storageRef, image);
    const url = await getDownloadURL(storageRef);
    return url;
}

const addNew = (Element) => {
    return push(newsRef, Element);
}

const scrollBack = () => {
    document.getElementsByClassName("news-container")[0].parentNode.scrollIntoView({ behavior: "smooth" });
}

export default { getNews, scrollBack, uploadImage, addNew };