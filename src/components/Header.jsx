import styled from 'styled-components';
import logo from './assets/logo.png';

const Header = () => (
  <NavBar>
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
    <div className="navlist">
      <ul>
        <li className="item">
          <a href="events">Évènements</a>
        </li>
        <li className="item">
          <a href="cards">Carte</a>
        </li>
        <li className="item">
          <a href="contact">Contact</a>
        </li>
        <li className="item">
          <a href="whoarewe">Qui sommes-nous</a>
        </li>
      </ul>
    </div>
  </NavBar>
);

const NavBar = styled.menu`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: orange;
`;

export default Header;
