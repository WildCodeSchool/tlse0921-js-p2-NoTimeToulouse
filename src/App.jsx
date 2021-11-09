
import Header from './components/Header';
// import { useState } from 'react';
// import DisplayEvent from './components/displayEvent';
// import sampleEvent from './components/sampleEvent';
import Footer from './components/footer';
import GetInfos from './components/Logic';


function App() {
  // const [events, setEvents] = useState(sampleEvent);

  return (
    <div>

      <Header />
      {/* <DisplayEvent events={sampleEvent} /> */}
      <Footer />
      <GetInfos />
    </div>
  );
}

export default App;
