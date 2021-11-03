// import { useState } from 'react';
import DisplayEvent from './components/displayEvent';
import sampleEvent from './components/sampleEvent';

function App() {
  // const [events, setEvents] = useState(sampleEvent);
  return (
    <div>
      <DisplayEvent events={sampleEvent} />
    </div>
  );
}

export default App;
