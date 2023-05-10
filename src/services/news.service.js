import { ref, get, push, remove } from "firebase/database";
import { uploadBytes, ref as Sref, getDownloadURL, deleteObject } from "firebase/storage";
import db from "../firebase";
import { v4 } from "uuid";

const newsRef = ref(db.database, "/News");
const NewsStorageRef = Sref(db.storage, "/News");

const getNews = () => {
  return get(newsRef);
}

const getOneNew = (key) => {
  let oneNewRef = ref(db.database, `/News/${key}`);
  return get(oneNewRef)
}

const uploadImage = async (image) => {
  let info = [];
  info[1] = v4();
  const ImageRef = Sref(NewsStorageRef, info[1]);
  await uploadBytes(ImageRef, image);
  info[0] = await getDownloadURL(ImageRef);
  return info;
}

const removeNew = (key) => {
  const newToDeleteRef = ref(db.database, `/News/${key}`);
  return remove(newToDeleteRef);
}

const removeImage = (imageName) => {
  const imageURL = Sref(NewsStorageRef, imageName);
  deleteObject(imageURL);
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
  addNew,
  removeNew,
  removeImage,
  getOneNew
};