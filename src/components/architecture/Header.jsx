import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Div>
        <Link to="/">
          <Logo>
            <img src="assets/logoTransparent.png" alt="logo" />
          </Logo>
        </Link>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>
      </Div>
      <Menu isOpen={isOpen}>
        <Link to="/accueil">
          <MenuLink>Accueil</MenuLink>
        </Link>
        <Link to="/evenements">
          <MenuLink>Évènements</MenuLink>
        </Link>
        <Link to="/contact">
          <MenuLink>Contact</MenuLink>
        </Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: var(--important-color);
  height: 70px;
  @media (min-width: 480px) {
    height: 95px;
  }
  @media (min-width: 1000px) {
    height: 100px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  height: 65px;
  @media (min-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  height: 30%;
  img {
    width: 25%;
    margin-top: -10px;
    height: auto;
  }
  @media (min-width: 480px) {
    img {
      width: 26%;
      margin-top: -22px;
    }
  }
  @media (min-width: 1000px) {
    img {
      width: 30%;
      margin-top: -47px;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  z-index: 10;
  flex-direction: column;
  width: 100%;
  height: 150px;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  background-color: #f06e96;
  overflow: hidden;
  z-index: 1;
  @media (min-width: 1000px) {
    overflow: visible;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    transition: 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  font-family: var(--title-font);
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: #0e131f;
  text-transform: uppercase;
  transition: all 0.3 ease-in;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    color: #fff3f0;
  }
`;

const Burger = styled.div`
  flex-direction: column;
  cursor: pointer;
  background-color: #f06e96;
  margin: 30px 20px 30px 20px;
  padding: none;
  height: 30px;
  display: flex;

  span {
    height: 5px;
    width: 35px;
    background: #0e131f;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (min-width: 1000px) {
    display: none;
  }
`;

export default Header;
