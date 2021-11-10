import Header from './components/Header';
import Footer from './components/footer';
import GetInfos from './components/Logic';
import ImgGrid from './components/Mosaique';
import Form from './components/ContactForm';
import MainContainer from './components/style/content';

function App() {
  return (
    <div>
      <Header />
      <h1>1111</h1>
      <MainContainer>
        <ImgGrid />
        <GetInfos />
        <Form />
      </MainContainer>
      <Footer />
    </div>
  );
}

export default App;
