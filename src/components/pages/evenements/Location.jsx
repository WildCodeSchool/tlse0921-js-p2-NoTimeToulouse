import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import '../../../index.css';

const Location = ({ marker, adress }) => {
  let position = [];

  if (marker[0] === undefined) {
    position = [43.36, 1.25];
  } else {
    [position] = marker;
  }

  return (
    <div id="card">
      <MapContainer center={position} zoom={20} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://api.mapbox.com/styles/v1/kachiri/ckvtbg01f1uuy14m3y614hi72/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoia2FjaGlyaSIsImEiOiJja3ZremZwazUxMTdjMnV0a3I2MjlqeHg4In0.nhQE7u38cBkAczGBWfBYMQ"
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
