import React, { useState } from 'react';
import Card from './components/Card';
import toulouseEvents from './events';
import Form from './components/ContactForm';

export default function App() {
  // eslint-disable-next-line no-unused-vars
  const [events, setEvents] = useState(toulouseEvents);
  return (
    <div>
      {events.map((event) => (
        <Card event={event} />
      ))}
      <Form />
    </div>
  );
}
