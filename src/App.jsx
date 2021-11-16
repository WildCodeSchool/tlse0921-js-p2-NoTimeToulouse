import { Routes, Route } from 'react-router-dom';
import EventsContainer from './components/EventsContainer';
import Form from './components/pages/contact/ContactForm';
import Layout from './components/architecture/Layout';
import Header from './components/architecture/Header';
import Footer from './components/architecture/Footer';
import HomePage from './components/architecture/HomePage';
import MainContainer from './style/MainContainer';

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
