import React from 'react';

const DisplayEvents = ({ eventsToDisplay }) => (
  <div className="events-container">
    {eventsToDisplay.map((event) => (
      <div className="one-event">
        <h2>{event.fields.name}</h2>
        <div className="description">
          {event.fields.littleDescription.length > 50 ? (
            <p>{`${event.fields.littleDescription.slice(0, 50)} ...`}</p>
          ) : (
            <p>{event.fields.littleDescription}</p>
          )}
        </div>
        <div>
          <ul className="infospratiques">
            {event.fields.dates && <li>{event.fields.dates}</li>}
            {event.fields.city && <li>{event.fields.city}</li>}
            {event.fields.eventTheme && <li>{event.fields.eventTheme}</li>}
            {event.fields.price && <li>{event.fields.price}</li>}
          </ul>
          <button type="button">Voir plus</button>
        </div>
      </div>
    ))}
  </div>
);
export default DisplayEvents;
