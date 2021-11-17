import styled from 'styled-components';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent className="one-event">
        <h2>{event.fields.name}</h2>
        <div className="footer-cards-inline">
          <div className="description">
            {event.fields.littleDescription.length > 50 ? (
              <p>{`${event.fields.littleDescription.slice(0, 50)} ...`}</p>
            ) : (
              <p>{event.fields.littleDescription}</p>
            )}
          </div>
          <ul className="infos-card">
            {event.fields.city && <li>{event.fields.city}</li>}
            {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
            {event.fields.price && <li>{event.fields.price}</li>}
          </ul>
          <button type="button" className="drop-modal">
            Voir plus
          </button>
        </div>
      </CardEvent>
    ))}
  </EventContainer>
);

const EventContainer = styled.div`
  display: flex;
  width: 200%;
`;
const CardEvent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.5em;
  width: 20%;
  padding: 1em;
  border: 1px solid black;
  border-radius: 10px;
`;

export default DisplayEventsInLine;
