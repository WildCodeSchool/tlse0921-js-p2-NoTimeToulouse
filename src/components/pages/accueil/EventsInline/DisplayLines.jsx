import styled from 'styled-components';
import Lines from './Line';

const LinesContainer = styled.div`
  margin-top: 10%;
  display: flex;
  flex-direction: column;
  width: 95%;
  height: 100%;
`;
const TitleContainer = styled.h2`
  margin-top: 5%;
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
