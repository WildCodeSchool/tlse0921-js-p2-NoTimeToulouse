import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import '../index.css';

const Location = ({ marker, adress }) => {
  let position = [];

  if (marker[0] === undefined) {
    position = [43.36, 1.25];
  } else {
    [position] = marker;
  }

  return (
    <div>
      <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            {adress === undefined ? <p>Lieu événement</p> : <p>{adress}</p>}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
