import React from 'react';
import styled from 'styled-components';

const Card = ({ event }) => {
  // const {
  //   nom_de_la_manifestation: name,
  //   descriptif_court: description,
  //   dates_affichage_horaire: date,
  //   commune: locality,
  //   categorie_de_la_manifestation: category,
  //   reservation_email: bookingMail,
  // } = event.fields;

  const EventsCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;

  return (
    <EventsCard>
      <h2>{event.fields.name}</h2>
      <div className="description">
        <p>{event.fields.littleDescription}</p>
      </div>
      <ul className="infospratiques">
        {event.fields.dates && <li>{event.fields.dates}</li>}
        {event.fields.city && <li>{event.fields.city}</li>}
        {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
        {event.fields.booking && <li>{event.fields.booking}</li>}
      </ul>
    </EventsCard>
  );
};
export default Card;
