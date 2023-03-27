import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  padding: 0.5rem 1rem;
`;

const NavLogo = styled.h1`
  color: #fff;
  cursor: pointer;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.li`
  color: #fff;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <StyledLink to="/">
        <NavLogo>MyApp</NavLogo>
      </StyledLink>
      <NavLinks>
        <NavLink>
          <StyledLink to="/">Home</StyledLink>
        </NavLink>
        <NavLink>
          <StyledLink to="/about">About</StyledLink>
        </NavLink>
        <NavLink>Contact</NavLink>
      </NavLinks>
    </Nav>
  );
};

export default Navbar;
