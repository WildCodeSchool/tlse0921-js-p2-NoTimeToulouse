import axios from 'axios';
import { useEffect, useState } from 'react';
// import DisplayEvent from './displayEvent';
import '../index.css';
import Cards from './Card';

const GetInfos = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get(
        'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows=400&facet=type_de_manifestation',
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
          geo_point: geoPoint /* [Lat, Long] */,
          tarif_normal: price,
          horaire_debut: startHour,
          lieu_adresse_2: adress,
          code_postal: zipCode,
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
            adress,
            zipCode,
          },
        };
      }))
      .then((fetchedEvents) => {
        setEvents(fetchedEvents);
      });
  }, []);
  console.log(events);
  return (
    <div>
      <h2>Liste événements triés</h2>
      {events.map((event) => (
        <Cards event={event} />
      ))}
    </div>
  );
  // ajout du tableau d'objet dans le state afin de l'utiliser de la façon que l'on veut
};

export default GetInfos;
