import styled from 'styled-components';
import React, { useState } from 'react';
import logo from './assets/logo.png';

const Header = () => {
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
        <MenuLink href="whoarewe">Qui sommes-nous</MenuLink>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: black;
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

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in;
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

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: orange;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

export default Header;
