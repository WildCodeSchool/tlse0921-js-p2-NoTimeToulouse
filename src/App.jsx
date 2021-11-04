import axios from 'axios';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([]);
  // Appel API via axios pour récupérer les données
  const getInfos = () => {
    axios
      .get(
        'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=500&facet=type_de_manifestation',
      )
      .then((response) => response.data.records)
      // on convertit le nom des variables via un map
      // pour atteindre toutes les clés qui nous intéressent
      .then((fetchedEvents) => fetchedEvents.map((e) => {
        const {
          nom_de_la_manifestation: name,
          dates_affichage_horaires: dates,
          type_de_manifestation: eventType,
          theme_de_la_manifestation: eventTheme,
          descriptif_court: littleDescription,
          descriptif_long: longDescription,
          commune: city,
          reservation_site_internet: booking,
          station_metro_tram_a_proximite: access,
          geo_point: geoPoint,
          tarif_normal: price,
          horaire_debut: startHour,
        } = e.fields;
        return {
          // destructuration de l'objet que l'on reçoit
          // afin d'écraser les données de fields et avoir les noms de variables souhaités
          ...e,
          fields: {
            name,
            dates,
            eventType,
            eventTheme,
            littleDescription,
            longDescription,
            city,
            booking,
            access,
            geoPoint,
            // geopoint[latitude, longitude]
            price,
            startHour,
          },
        };
      }))
      .then((fetchedEvents) => setEvents(fetchedEvents));
    // ajout du tableau d'objet dans le state afin de l'utiliser de la façon que l'on veut
  };
  console.log(events);
  return (
    <div>
      <button type="button" onClick={getInfos}>
        Get infos
      </button>
    </div>
  );
}

export default App;
