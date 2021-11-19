import styled from 'styled-components';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';
import wild from '../../assets/wild.png';

const NewsLetter = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  margin-bottom: 2em;
  label {
    padding: 1em;
    text-align: center;
    font-weight: bold;
    color: white;
  }
  input {
    margin-top: 0.8em;
    border-color: white;
    width: 60%;
  }
  @media screen and (min-width: 600px) {
    align-items: center;
    input {
      width: 60%;
      margin-bottom: none;
    }
  }
`;

const LabelEmail = styled.label`
  align-items: center;
`;

const Img = styled.img`
  height: 50px;
  width: 50px;

  @media screen and (min-width: 600px) {
    padding-inline: 20px;
  }
`;

const SubmitButton = styled.button`
  width: 20%;
  height: 40px;
  color: var(--important-color);
  font-weight: bold;
  border-radius: 5px;
  border: var(--important-color) solid 3px;
  background-color: white;
  cursor: pointer;
`;

const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  @media screen and (min-width: 600px) {
    justify-content: space-between;
    align-items: center;
    width: 30%;
  }
`;

const Wrapper = styled.section`
  background: var(--important-color);
  font-family: var(--text-font);
  text-decoration: none;
  @media screen and (min-width: 600px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;

const LegalMention = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContributionList = styled.ul`
  text-align: center;
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  font-weight: bold;
  color: white;
  width: 100%;
  a {
    font-weight: bold;
    color: white;
  }
  @media screen and (min-width: 600px) {
    flex-direction: row;
    justify-content: space-around;
    width: 90%;
  }
`;

const LinkCont = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  @media screen and (min-width: 600px) {
  }
`;

const Hyperlien = styled.a`
  &:hover {
    color: black;
  }
`;

const MadeBy = styled.p`
  text-align: center;
  @media screen and (min-width: 600px) {
    font-weight: bold;
    color: white;
  }
`;
function handleSubmit() {
  alert('Merci de vous être inscrit.e à notre newsletter !');
}
const Footer = () => (
  <Wrapper className="footer">
    <NewsLetter>
      <LabelEmail htmlFor="email">
        Inscris-toi afin de ne rater aucune nouveauté !
        <input
          type="email"
          name="email"
          id="email"
          placeholder="notime@toulouse.fr"
        />
      </LabelEmail>
      <SubmitButton type="submit" value="Submit" onClick={handleSubmit}>
        Submit
      </SubmitButton>
    </NewsLetter>
    <SocialLink>
      <a
        href="https://www.facebook.com/WildCodeSchool"
        target="_blank"
        label="Facebook"
        rel="noreferrer"
      >
        <Img src={facebook} alt="logo facebook" />
      </a>
      <a
        href="https://github.com/WildCodeSchool/tlse0921-js-p2-NoTimeToulouse"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={github} alt="logo gitHub" />
      </a>

      <a href="https://twitter.com/WCS_OC" target="_blank" rel="noreferrer">
        <Img src={twitter} alt="logo twitter" />
      </a>
      <a
        href="https://www.wildcodeschool.com/fr-FR"
        target="_blank"
        rel="noreferrer"
      >
        <Img src={wild} alt="logowild" />
      </a>
    </SocialLink>
    <LegalMention>
      <ContributionList>
        Développé avec :
        <LinkCont>
          <Hyperlien
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer"
          >
            Styled components
          </Hyperlien>
        </LinkCont>
        <LinkCont>
          <Hyperlien
            href="https://react-leaflet.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            React Leaflet
          </Hyperlien>
        </LinkCont>
        <LinkCont>
          <Hyperlien
            href="https://data.toulouse-metropole.fr/pages/accueilv3/"
            target="_blank"
            rel="noreferrer"
          >
            API de Toulouse métropole
          </Hyperlien>
        </LinkCont>
      </ContributionList>
      <MadeBy>Réalisé avec ♥️ par Emma, Anaïs, Kachiri, Cyril & Maxime</MadeBy>
      <MadeBy>Session dev 09-2021 de la Wild Code School</MadeBy>
    </LegalMention>
  </Wrapper>
);

export default Footer;
