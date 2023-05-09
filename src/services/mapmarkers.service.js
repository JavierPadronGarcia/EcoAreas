import { ref, get } from "firebase/database";
import db from "../firebase";

const mapMarkersRef = ref(db.database, "/MapMarkers");

const getMapMarkers = () => {
  return get(mapMarkersRef);
}

export default {
  getMapMarkers
};