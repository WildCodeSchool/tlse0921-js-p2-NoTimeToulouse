import DisplayEvent from './DisplayEvent';

const Filter = ({ events }) => {
  console.log(events);
  return (
    <div>
      {events
        .filter(
          (event) => event.fields.eventTheme !== undefined
            && (event.fields.eventTheme === 'Cinéma'
              || event.fields.eventTheme === 'cinéma'),
        )
        .map((event) => (
          <DisplayEvent key={event.recordid} events={event} />
        ))}
    </div>
  );
};

export default Filter;
