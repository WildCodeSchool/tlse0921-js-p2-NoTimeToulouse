import Header from './components/Header';
import Footer from './components/footer';
import GetInfos from './components/Logic';
import ImgGrid from './components/Mosaique';
import Form from './components/ContactForm';

function App() {
  return (
    <div>
      <Header />
      <ImgGrid />
      <GetInfos />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
