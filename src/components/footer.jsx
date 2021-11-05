import facebook from './assets/facebook.png';
import github from './assets/github.png';
import wcs from './assets/WCS.png';
import twitter from './assets/twitter.png';

/* eslint-disable jsx-a11y/label-has-associated-control */
const Footer = () => (
  <div className="footer">
    <form className="newsleter">
      <label htmlFor="email">inscris toi afin de ne rien louper</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="notime@tolouse.fr"
      />
    </form>
    <div className="socialLink">
      <a
        href="https://www.facebook.com/WildCodeSchool"
        target="_blank"
        rel="noreferrer"
      >
        <img src={facebook} alt="logo facebook" height="50" width="50" />
      </a>
      <a
        href="https://github.com/WildCodeSchool/tlse0921-js-p2-NoTimeToulouse"
        target="_blank"
        rel="noreferrer"
      >
        <img src={github} alt="logo gitHub" height="50" width="50" />
      </a>
      <a
        href="https://www.wildcodeschool.com/fr-FR/campus/toulouse"
        target="_blank"
        rel="noreferrer"
      >
        <img src={wcs} alt="logo wild code school" height="50" width="50" />
      </a>
      <a href="https://twitter.com/WCS_OC" target="_blank" rel="noreferrer">
        <img src={twitter} alt="logo twitter" height="50" width="50" />
      </a>
    </div>
    <div className="legalMention" />
    Realised with:
    <ul>
      <li>
        <a href="https://styled-components.com/">Stylled components</a>
      </li>
      <li>
        <a href="https://react-leaflet.js.org/">React Leaflet</a>
      </li>
      <li>
        <a href="https://data.toulouse-metropole.fr/pages/accueilv3/">
          API de Toulouse métropole
        </a>
      </li>
    </ul>
    <p>made with ♥️ by Emma, Anaïs, Kachiri, Cyril & Maxime</p>
  </div>
);

export default Footer;
