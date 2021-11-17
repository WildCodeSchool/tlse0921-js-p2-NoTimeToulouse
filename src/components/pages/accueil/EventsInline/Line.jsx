import DisplayEvents from '../../evenements/DisplayEvents';
import FetchApiTls from '../../../api/FetchApiTls';

const Line = ({ theme }) => {
  const events = FetchApiTls(theme);
  return (
    <>
      <h1>lol</h1>
      <DisplayEvents eventsToDisplay={events} />
    </>
  );
};

export default Line;
