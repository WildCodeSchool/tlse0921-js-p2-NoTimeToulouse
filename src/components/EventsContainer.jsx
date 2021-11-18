import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import '../index.css';
import DisplayEvents from './pages/evenements/DisplayEvents';
import Filter from './Filter';

const EventsContainer = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://data.toulouse-metropole.fr/api/records/1.0/search/?dataset=agenda-des-manifestations-culturelles-so-toulouse&q=&rows1&facet=type_de_manifestation',
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

  const [filterValue, setFilterValue] = useState(undefined);
  const [eventsToDisplay, setEventsToDisplay] = useState([]);
  useEffect(() => {
    setEventsToDisplay(
      events.filter(
        (eventsFiltered) => (eventsFiltered.fields.eventTheme
            && eventsFiltered.fields.eventTheme.includes(filterValue))
          || (eventsFiltered.fields.eventType
            && eventsFiltered.fields.eventType.includes(filterValue)),
      ),
    );
  }, [filterValue]);

  return (
    <SearchContainer className="search-container">
      <Filter filterValue={filterValue} setFilterValue={setFilterValue} />
      <DisplayEvents eventsToDisplay={eventsToDisplay} />
    </SearchContainer>
  );
  // ajout du tableau d'objet dans le state afin de l'utiliser de la façon que l'on veut
};

const SearchContainer = styled.div`
  width: 100%;
`;
export default EventsContainer;
