import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';

const Location = () => (
  <MapContainer center={[43.61, 1.334]} zoom={20} scrollWheelZoom>
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={[43.61, 1.334]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  </MapContainer>
);

export default Location;
