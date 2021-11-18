import styled from 'styled-components';

const Hero = () => (
  <ImgContainer>
    <HeroTitle>Agenda événementiel Toulouse</HeroTitle>
    <div>
      <button type="button">Trouver un événement</button>
      <button type="button">Nous Contacter</button>
    </div>
  </ImgContainer>
);

const ImgContainer = styled.div`
  width: 100%;
  height: 70vh;
  background: url('https://images.unsplash.com/photo-1563517987202-fcc3b7eb13fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=200');
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 16px 21px -6px rgba(0, 0, 0, 0.4);
`;
const HeroTitle = styled.h1`
  color: white;
  font-size: 1.5em;
`;
export default Hero;
