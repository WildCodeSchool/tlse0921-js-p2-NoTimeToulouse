const DisplayEvent = ({ events }) => {
  console.log('events');
  return (
    <ul>
      <li>{events.fields.name}</li>
    </ul>
  );
};

export default DisplayEvent;
