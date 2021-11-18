import styled from 'styled-components';
import team from '../../../assets/team.jpg';
import gif from '../../../assets/logoGif.gif';

const About = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;
`;

const Presentation = styled.p`
  text-align: justify;
  width: 80%;
  margin: 50px;
`;

const TeamGif = styled.img`
  width: 40%;
  margin: auto;
`;
const TeamImg = styled.img`
  width: 100%;
  height: auto;
`;

const TitleTeam = styled.h2`
  text-align: center;
`;

const AboutPage = () => (
  <About>
    <TeamImg src={team} alt="team" />
    <TitleTeam>No Team Toulouse</TitleTeam>
    <Presentation>
      Dans le but d&apos;informer sur les activités culturelles de Toulouse et
      ses alentours, et de permettre aux organisateurs de la vie culturelle
      d&apos;avoir un espace de communication pour leurs évenements,
      l&apos;équipe de développeurs de la Wild Code School vous propose le site
      No Time Toulouse. Grâce à No Time Toulouse, Kachiri, Maxime, Emma, Cyril
      et Anaïs ont mis en service un site où vous pouvez chercher un évènement
      en fonction de vos goûts ou chercher des informations sur un évènement en
      particulier.
    </Presentation>
    <TeamGif src={gif} alt="gif" />
  </About>
);

export default AboutPage;
