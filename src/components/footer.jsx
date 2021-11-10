/* eslint-disable jsx-a11y/anchor-has-content */
import styled from 'styled-components';
import facebook from './assets/facebook.png';
import github from './assets/github.png';
import wcs from './assets/WCS.png';
import twitter from './assets/twitter.png';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Footer = () => {
  const NewsLetter = styled.form`
    display: flex;
    justify-content: center;
    padding-block: 20px;

    input {
      margin-inline: 20px;
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

    }
  `;

  const Wrapper = styled.section`
    /* padding: 4em; */
    background: papayawhip;
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
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    width: 100%;

    @media screen and (min-width: 600px) {
      flex-direction: row;
      justify-content: space-evenly;
    }
  `;

  const LinkCont = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const MadeBy = styled.p`
    text-align: center;
  `;

  return (
    <Wrapper className="footer">
      <NewsLetter>
        <label htmlFor="email">inscris toi afin de ne rien louper</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="notime@toulouse.fr"
        />
        <button type="submit" value="Submit">
          Submit
        </button>
      </NewsLetter>
      <SocialLink>
        <Img src={facebook} alt="logo facebook">
          {/* <a
            href="https://www.facebook.com/WildCodeSchool"
            target="_blank"
            rel="noreferrer"
            label="Facebook"
          /> */}
        </Img>
        <Img src={github} alt="logo gitHub">
          {/* <a
            href="https://github.com/WildCodeSchool/tlse0921-js-p2-NoTimeToulouse"
            target="_blank"
            rel="noreferrer"
          /> */}
        </Img>
        <Img src={wcs} alt="logo wild code school">
          {/* <a
            href="https://www.wildcodeschool.com/fr-FR/campus/toulouse"
            target="_blank"
            rel="noreferrer"
          /> */}
        </Img>
        <Img src={twitter} alt="logo twitter">
          {/* <a
            href="https://twitter.com/WCS_OC"
            target="_blank"
            rel="noreferrer"
          /> */}
        </Img>
      </SocialLink>
      <LegalMention>
        <ContributionList>
          Realised with:
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
              React Leaflet
            </a>
          </LinkCont>
          <LinkCont>
            <a
              href="https://data.toulouse-metropole.fr/pages/accueilv3/"
              target="_blank"
              rel="noreferrer"
            >
              API de Toulouse métropole
            </a>
          </LinkCont>
        </ContributionList>
        <MadeBy>Réalisé ♥️ by Emma, Anaïs, Kachiri, Cyril & Maxime</MadeBy>
        <MadeBy>session dev 09_2021 de Wild Code School</MadeBy>
      </LegalMention>
    </Wrapper>
  );
};

export default Footer;
