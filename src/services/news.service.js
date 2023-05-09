import { ref, get, push } from "firebase/database";
import { uploadBytes, ref as Sref, getDownloadURL } from "firebase/storage";
import db from "../firebase";
import { v4 } from "uuid";

const newsRef = ref(db.database, "/News");
const NewsStorageRef = Sref(db.storage, "/News");

const getNews = () => {
    return get(newsRef);
}

const uploadImage = async (image) => {
    const ImageRef = Sref(NewsStorageRef, v4());
    await uploadBytes(ImageRef, image);
    const url = await getDownloadURL(ImageRef);
    return url;
}

const addNew = (details, id, img, text) => {
    return push(newsRef, {
        details: details,
        id: id,
        img: img,
        text: text
    });
}

const scrollBack = () => {
    document.getElementsByClassName("news-container")[0].parentNode.scrollIntoView({ behavior: "smooth" });
}

export default {
    getNews,
    scrollBack,
    uploadImage,
    addNew
};