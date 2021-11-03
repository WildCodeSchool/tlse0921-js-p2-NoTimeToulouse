const DisplayEvent = (...events) => {
  console.log(events);
  return (
    <ul>
      <li>
        Name : {events.name} - themes : {events.eventTheme}
      </li>
    </ul>
  );
};

export default DisplayEvent;
