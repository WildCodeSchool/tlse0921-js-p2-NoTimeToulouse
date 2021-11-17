import styled from 'styled-components';
import Lines from './Line';

const LinesContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 80%;
`;
const TitleContainer = styled.h2`
  margin-top: 4%;
  font-family: var(--title-font);
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
