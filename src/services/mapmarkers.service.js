import { ref, get } from "firebase/database";
import database from "../firebase";

const mapMarkersRef = ref(database, "/MapMarkers");

const getMapMarkers = () => {
  return get(mapMarkersRef);
}

export default {
  getMapMarkers
};