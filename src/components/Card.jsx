import React from 'react';
import styled from 'styled-components';

const EventsCard = styled.div`
  margin: auto;
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: space-between;
`;
const ListInfoCard = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const Card = ({ eventsToDisplay }) => (
  <EventsCard>
    {eventsToDisplay.map((event) => (
      <div>
        <h2>{event.fields.name}</h2>
        <div className="description">
          <p>{event.fields.littleDescription}</p>
        </div>
        <ListInfoCard className="infospratiques">
          {event.fields.dates && <li>{event.fields.dates}</li>}
          {event.fields.city && <li>{event.fields.city}</li>}
          {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
          {event.fields.booking && <li>{event.fields.booking}</li>}
        </ListInfoCard>
      </div>
    ))}
  </EventsCard>
);
export default Card;
