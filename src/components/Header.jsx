import styled from 'styled-components';
import { useState } from 'react';
/* import { Anchor } from 'antd'; */
import logo from './assets/logo.png';

/* const { Link } = Anchor; */

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Nav>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <MenuLink href="events">Évènements</MenuLink>
        <MenuLink href="map">Carte</MenuLink>
        <MenuLink href="contact">Contact</MenuLink>
        <MenuLink href="whoarewe">Qui sommes-nous ?</MenuLink>
      </Menu>
    </Nav>
  );
};

/* <Anchor>
        <Link href="#contact" title="Contact" />
        <Link href="#components-anchor-demo-static" title="Static demo" />
      </Anchor> */

const Nav = styled.nav`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: pink;

  @media (max-width: 1624px) {
    display: flex;
  }
`;

const Logo = styled.div`
  padding: 1rem 0;
  img {
    width: 35%;
    height: 35%;
    border-radius: 5%;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1624px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: 0.3s ease-in;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  color: white;
  text-transform: uppercase;
  transition: all 0.3 ease-in;
  font-size: 32px;
  font-weight: bold;
  &:hover {
    color: orange;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 8px;
    width: 45px;
    background: orange;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1624px) {
    display: flex;
  }
`;

export default Header;
