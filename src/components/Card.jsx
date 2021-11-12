import React from 'react';
import styled from 'styled-components';

const ContainerCards = styled.div`
  margin: auto;
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  font-size: 12px;
`;
const EventCard = styled.div`
  border: 1px solid #f06e96;
  padding: 2em;
`;
const ListInfoCard = styled.ul`
  list-style-type: none;
  padding: 0;
`;
const CardsTitle = styled.h2`
  font-size: 1.2em;
`;
const ButtonOpenEvent = styled.button`
  padding: 0.5em;
  height: 50%;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Card = ({ eventsToDisplay }) => (
  <ContainerCards>
    {eventsToDisplay.map((event) => (
      <EventCard>
        <CardsTitle>{event.fields.name}</CardsTitle>
        <div className="description">
          <p>{event.fields.littleDescription}</p>
        </div>
        <CardFooter>
          <ListInfoCard className="infospratiques">
            {event.fields.dates && <li>{event.fields.dates}</li>}
            {event.fields.city && <li>{event.fields.city}</li>}
            {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
            {event.fields.price && <li>{event.fields.price}</li>}
          </ListInfoCard>
          <ButtonOpenEvent>Voir plus</ButtonOpenEvent>
        </CardFooter>
      </EventCard>
    ))}
  </ContainerCards>
);
export default Card;
