import styled from 'styled-components';

const About = styled.p`
  text-align: center;
  margin: 50px;
  font-family: var(--text-font);
`;

const AboutPage = () => (
  <About className="about">
    <p>
      Dans le but d&apos;informer sur les activités culturelles de Toulouse et
      ses alentours, et de permettre aux organisateurs de la vie culturelle
      d&apos;avoir un espace de communication pour leurs évenements,
      l&apos;équipe de développeurs de la Wild Code School vous propose le site
      No Time Toulouse.
    </p>
    <p>
      Grâce à No Time Toulouse, Kachiri, Maxime, Emma, Cyril et Anaïs ont mis en
      service un site où vous pouvez chercher un évenement en fonction de vos
      goûts ou chercher des informations sur un évenement en particulier.
    </p>
  </About>
);

export default AboutPage;
