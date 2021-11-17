import styled from 'styled-components';
import fetchApiUnsplash from '../../../api/FetchApiUnsplash';

const DisplayEventsInLine = ({ eventsToDisplay }) => (
  <EventContainer>
    {eventsToDisplay.map((event) => (
      <CardEvent>
        <TitleEvent>{event.fields.name}</TitleEvent>
        <ButtonImgEvent>
          <EventImg
            src={fetchApiUnsplash(event.fields.eventCategory).urlImg}
            alt={event.fields.name}
          />
        </ButtonImgEvent>
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
  font-family: var(--text-font);
`;
const ButtonImgEvent = styled.button`
  height: 100%;
  width: 100%;
  border-radius: 10px;
  border: 0;
  cursor: pointer;
  font-family: var(--text-font);
  &:hover {
    background-color: rgba(255, 255, 255, 30%);
  }
`;

export default DisplayEventsInLine;
