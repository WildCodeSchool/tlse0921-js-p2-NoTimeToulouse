import styled from 'styled-components';
import { useState } from 'react';
import logo from './assets/logoTransparent.png';

/* const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Hamburger onCLick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
      <Menu isOpen={isOpen}>
        <MenuLink href="events">Évènements</MenuLink>
        <MenuLink href="cards">Carte</MenuLink>
        <MenuLink href="contact">Contact</MenuLink>
        <MenuLink href="whoarewe">Qui sommes-nous ?</MenuLink>
      </Menu>
    </Nav>
  );
}; */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Div>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <Burger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Burger>
      </Div>
      <Menu isOpen={isOpen}>
        <MenuLink href="events">Évènements</MenuLink>
        <MenuLink href="cards">Carte</MenuLink>
        <MenuLink href="whoarewe">Qui sommes-nous ?</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: #f06e96;
  height: 70px;
  @media (min-width: 480px) {
    height: 100px;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 20px;
  @media (min-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  height: 20%;
  img {
    width: 20%;
    height: auto;
  }
  @media (min-width: 480px) {
    height: 30%;
    margin-top: -10px;
    img {
      width: 25%;
      height: auto;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  flex-direction: column;
  width: 100%;
  max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
  background-color: #f06e96;
  overflow: hidden;
  @media (min-width: 500px) {
    overflow: visible;
    flex-direction: row;
    justify-content: flex-end;
    position: absolute;
    transition: 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: #0e131f;
  text-transform: uppercase;
  transition: all 0.3 ease-in;
  font-size: 32px;
  font-weight: bold;
  &:hover {
    color: #fff3f0;
  }
`;

const Burger = styled.div`
  flex-direction: column;
  cursor: pointer;
  background-color: #f06e96;
  margin-top: 25px;
  margin-left: 30px;
  margin-right: 20px;
  margin-bottom: none;
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

  @media (min-width: 500px) {
    display: none;
  }
`;

export default Header;
