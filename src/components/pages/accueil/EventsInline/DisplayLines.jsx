import styled from 'styled-components';
import Lines from './Line';

const LinesContainer = styled.div`
  margin-top: 1em;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
  padding: 1em;
  @media screen and (min-width: 770px) {
    width: 85%;
  }
`;
const TitleContainer = styled.h2`
  width: 100%;
  margin-top: 5%;
  font-size: 2em;
  font-family: var(--title-font);
  position: relative;
  &:after {
    border-radius: 5px;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 40%;
    width: 30%;
    background: var(--important-color);
    z-index: -1;
    @media screen and (min-width: 770px) {
      width: 10%;
    }
  }
`;
const DisplayLines = () => (
  <LinesContainer>
    <TitleContainer>Concerts</TitleContainer>
    <Lines theme="Concert" />
    <TitleContainer>Animations</TitleContainer>
    <Lines theme="Animations" />
    <TitleContainer>Festivals</TitleContainer>
    <Lines theme="Concert%2C+Festival" />
    <TitleContainer>Expositions</TitleContainer>
    <Lines theme="Exposition" />
    <TitleContainer>Spectacles</TitleContainer>
    <Lines theme="Animations%2C+Spectacle" />
  </LinesContainer>
);

export default DisplayLines;
