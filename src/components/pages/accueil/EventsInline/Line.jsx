import styled from 'styled-components';
import DisplayEvents from '../../evenements/DisplayEvents';
import FetchApiTls from '../../../api/FetchApiTls';
import '../../../../index.css';

const EventsInLine = styled.div`
  width: 100%;
  overflow: scroll;
  margin-bottom: 1em;
  font-size: 0.5em;
`;
const EventContainer = styled.div`
  border: 1px solid black;
`;

const Line = ({ theme }) => {
  const events = FetchApiTls(theme);
  return (
    <EventsInLine>
      <EventContainer>
        <DisplayEvents eventsToDisplay={events} className="event-line" />
      </EventContainer>
    </EventsInLine>
  );
};

export default Line;
