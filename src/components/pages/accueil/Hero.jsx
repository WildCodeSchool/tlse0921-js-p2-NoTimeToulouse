import styled from 'styled-components';

const Hero = () => (
  <ImgContainer>
    <HeroTitle>
      Votre Agenda événementiel <br />
      Toulousain
    </HeroTitle>
    <ButtonContainer>
      <QuickButtonLeft>Concert</QuickButtonLeft>
      <QuickButtonLeft>Musique</QuickButtonLeft>
      <QuickButtonRight>Art</QuickButtonRight>
      <QuickButtonRight>Sport</QuickButtonRight>
    </ButtonContainer>
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
  text-align: center;
  font-size: 2em;
`;
const ButtonContainer = styled.div`
  margin-top: 2em;
  width: 90%;
  display: flex;
  justify-content: space-around;
`;
const QuickButtonLeft = styled.button`
  width: 20%;
  height: 50px;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  border: var(--important-color) solid 3px;
  background-color: var(--important-color);
`;
const QuickButtonRight = styled.button`
  width: 20%;
  height: 50px;
  color: var(--important-color);
  font-weight: bold;
  border-radius: 5px;
  border: white solid 3px;
  background: rgba(255, 255, 255, 0.1);
`;
export default Hero;
