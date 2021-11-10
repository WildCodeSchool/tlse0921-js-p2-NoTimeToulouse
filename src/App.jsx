import Header from './components/Header';
import Footer from './components/footer';
import GetInfos from './components/Logic';
import ImgGrid from './components/Mosaique';
import Form from './components/ContactForm';

function App() {
  return (
    <div>
      <Header />
      <GetInfos />
      <ImgGrid />
      <Footer />
      <Form />
    </div>
  );
}

export default App;
