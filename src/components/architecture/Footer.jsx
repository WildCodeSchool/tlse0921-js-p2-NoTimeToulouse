import styled from 'styled-components';
import facebook from '../../assets/facebook.png';
import github from '../../assets/github.png';
import twitter from '../../assets/twitter.png';

const NewsLetter = styled.form`
  display: flex;
  justify-content: center;
  label {
    padding: 1em;
    width: 20%;
    padding-right: 0;
  }
  input {
    width: 50%;
    height: 25px;
    margin-top: 5px;
    margin-left: 20px;
    border-radius: 7px;
    text-align: center;
  }
  button {
    width: 100px;
    height: 25px;
    margin-top: 42px;
  }
`;

const Img = styled.img`
  height: 50px;
  width: 50px;

  @media screen and (min-width: 600px) {
    padding-inline: 20px;
  }
`;

const SocialLink = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  @media screen and (min-width: 600px) {
    justify-content: center;
  }
`;

const Wrapper = styled.section`
  background: var(--important-color);
`;

const LegalMention = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ContributionList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  @media screen and (min-width: 600px) {
    flex-direction: row;
  }
`;

const LinkCont = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    margin-left: 0.2em;
  }
`;

const MadeBy = styled.p`
  text-align: center;
`;
const Footer = () => (
  <Wrapper className="footer">
    <NewsLetter>
      <label htmlFor="email">
        inscris toi afin de ne rien louper
        <input
          type="email"
          name="email"
          id="email"
          placeholder="notime@toulouse.fr"
        />
      </label>
      <button type="submit" value="Submit">
        Submit
      </button>
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
    </SocialLink>
    <LegalMention>
      <ContributionList>
        Realisé avec :
        <LinkCont>
          <a
            href="https://styled-components.com/"
            target="_blank"
            rel="noreferrer"
          >
            Styled components
          </a>
        </LinkCont>
        <LinkCont>
          <a
            href="https://react-leaflet.js.org/"
            target="_blank"
            rel="noreferrer"
          >
            , React Leaflet
          </a>
        </LinkCont>
        <LinkCont>
          <a
            href="https://data.toulouse-metropole.fr/pages/accueilv3/"
            target="_blank"
            rel="noreferrer"
          >
            , API de Toulouse métropole
          </a>
        </LinkCont>
      </ContributionList>
      <MadeBy>Réalisé ♥️ by Emma, Anaïs, Kachiri, Cyril & Maxime</MadeBy>
      <MadeBy>session dev 09_2021 de Wild Code School</MadeBy>
    </LegalMention>
  </Wrapper>
);

export default Footer;
