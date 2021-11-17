import styled from 'styled-components';
import fetchApiUnsplash from '../../../api/FetchApiUnsplash';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent className="one-event">
        <TitleEvent>{event.fields.name}</TitleEvent>
        <EventImg
          src={fetchApiUnsplash(event.fields.eventCategory).urlImg}
          alt={event.fields.name}
        />
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
  margin-right: 3em;
  width: 20%;
  height: 30vh;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
`;
const EventImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;
const TitleEvent = styled.h2`
  position: absolute;
  font-size: 1.5em;
  bottom: 20%;
  left: 3%;
  background-color: rgba(255, 255, 255, 30%);
`;

export default DisplayEventsInLine;
