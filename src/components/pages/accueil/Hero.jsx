import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Hero = () => (
  <ImgContainer>
    <HeroTitle>
      Votre Agenda évènementiel <br />
      Toulousain
    </HeroTitle>
    <ButtonContainer>
      <Link to="/evenements" className="btn-hero">
        <QuickButtonLeft>Trouver un évènement</QuickButtonLeft>
      </Link>
      <Link to="/contact" className="btn-hero">
        <QuickButtonRight>Nous contacter</QuickButtonRight>
      </Link>
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
  font-family: var(--title-font);
`;
const ButtonContainer = styled.div`
  margin-top: 2em;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  @media screen and (min-width: 770px) {
    width: 30%;
  }
`;
const QuickButtonLeft = styled.button`
  display: flex;
  align-items: center;
  font-size: 1em;
  padding: 1em;
  height: 50px;
  color: white;
  font-weight: bold;
  font-family: var(--title-font);
  border-radius: 5px;
  border: var(--important-color) solid 3px;
  background-color: var(--important-color);
  &:hover {
    cursor: pointer;
    border: white solid 3px;
    background: rgba(255, 255, 255, 0.7);
    color: var(--important-color);
  }
`;
const QuickButtonRight = styled.button`
  display: flex;
  align-items: center;
  font-size: 1em;
  height: 50px;
  padding: 1em;
  color: var(--important-color);
  font-weight: bold;
  font-family: var(--title-font);
  border-radius: 5px;
  border: var(--important-color) solid 3px;
  background: rgba(255, 255, 255, 0.7);
  &:hover {
    cursor: pointer;
    border: var(--important-color) solid 3px;
    background-color: var(--important-color);
    color: white;
  }
`;
export default Hero;
