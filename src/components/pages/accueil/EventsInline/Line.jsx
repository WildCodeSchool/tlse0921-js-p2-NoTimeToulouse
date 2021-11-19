import styled from 'styled-components';
import DisplayEventsInLine from './DisplayEventsInLine';
import FetchApiTls from '../../../api/FetchApiTls';
import '../../../../index.css';

const EventsInLine = styled.div`
  width: 100%;
  overflow: scroll;
  margin-bottom: 2em;
  font-size: 0.5em;
`;

const Line = ({ theme }) => {
  const events = FetchApiTls(theme);
  return (
    <EventsInLine>
      <div>
        <DisplayEventsInLine eventsToDisplay={events} className="event-line" />
      </div>
    </EventsInLine>
  );
};

export default Line;
