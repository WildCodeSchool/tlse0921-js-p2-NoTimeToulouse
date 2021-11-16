import { Routes, Route } from 'react-router-dom';
import EventsContainer from './components/EventsContainer';
import Form from './components/ContactForm';
import Layout from './components/Layout';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import MainContainer from './components/style/MainContainer';

function App() {
  return (
    <div>
      <Layout header={<Header />} footer={<Footer />}>
        <MainContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/accueil" element={<HomePage />} />
            <Route path="/evenements" element={<EventsContainer />} />
            <Route path="/contact" element={<Form />} />
          </Routes>
        </MainContainer>
      </Layout>
    </div>
  );
}

export default App;
