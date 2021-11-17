import styled from 'styled-components';
import DisplayEvents from '../../evenements/DisplayEvents';
import FetchApiTls from '../../../api/FetchApiTls';

const EventsInLine = styled.div`
  display: flex;
  width: 100%;
`;
const EventContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: calc((100vw / 5) - 5px);
`;

const Line = ({ theme }) => {
  const events = FetchApiTls(theme);
  return (
    <EventsInLine>
      <EventContainer>
        <DisplayEvents eventsToDisplay={events} />
      </EventContainer>
    </EventsInLine>
  );
};

export default Line;
