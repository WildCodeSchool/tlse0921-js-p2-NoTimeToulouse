import styled from 'styled-components';

const Hero = () => (
  <ImgContainer>
    <h1>Agenda événementiel Toulouse</h1>
    <button type="button">Trouver un événement</button>
    <button type="button">Nous Contacter</button>
  </ImgContainer>
);

const ImgContainer = styled.div`
  width: 100%;
  height: 50vh;
  background: url('https://images.unsplash.com/photo-1563517987202-fcc3b7eb13fe?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2232&q=80');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export default Hero;
