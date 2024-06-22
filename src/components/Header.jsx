import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: ${(props) => (props.scrolled ? '#000' : 'transparent')};
  color: ${(props) => (props.scrolled ? '#fff' : '#1a1a1a')};
  transition: background-color 0.3s, color 0.3s;
  padding: 20px 0;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px 20px;
  font-size: 20px;
  background-color: rgba(255, 255, 255, 0.7); /* Added background color */
  border-radius: 10px; /* Added border radius */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Added text shadow */
`;

const Title = styled.h1`
  font-size: 30px;
  margin: 0;
  transform: translateX(10  %); /* Shift title to the left */
`;

const Nav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
  }

  li {
    margin-left: 20px;
  }

  a {
    text-decoration: none;
    color: ${(props) => (props.scrolled ? '#fff' : '#1a1a1a')};
    font-weight: bold;
    transition: color 0.3s;
  }
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer scrolled={scrolled}>
      <HeaderContent>
        <Title>𝑴𝒆𝒅𝒊𝒂𝒍 𝑬𝒒𝒖𝒊𝒑𝒎𝒆𝒏𝒕</Title>
        <Nav scrolled={scrolled}>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/cart">Cart</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/store" >Store</a></li>
           
          </ul>
        </Nav>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;
