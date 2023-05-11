import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import "./Map.css";

function Map(props) {
  const markers = props.markers;
  return (
    <div className='map-container-div'>
      <MapContainer center={[28.685721, -15.628115]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((m) => {
          return (
            <Marker position={[m.latitude, m.longitude]}>
              <Popup>
                <p id='marker-title'>{m.title}</p>
                <p id='marker-description'>{m.description}</p>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
