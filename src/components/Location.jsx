import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

const Location = ({ marker }) => {
  const latitude = marker[0][0];
  const longitude = marker[0][1];

  if (marker === undefined) {
    return null;
  }

  return (
    <MapContainer center={[latitude, longitude]} zoom={20} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[latitude, longitude]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Location;
