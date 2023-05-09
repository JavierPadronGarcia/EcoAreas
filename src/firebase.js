// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8AzXc_u6hOthrw7mGIe3MfNSbva6zUmU",
  authDomain: "ecoareas-3edd0.firebaseapp.com",
  databaseURL: "https://ecoareas-3edd0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ecoareas-3edd0",
  storageBucket: "ecoareas-3edd0.appspot.com",
  messagingSenderId: "257201835666",
  appId: "1:257201835666:web:bd791bbe78b768258fa04b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
const storage = getStorage(app);
console.log(storage);

export default { database, storage };