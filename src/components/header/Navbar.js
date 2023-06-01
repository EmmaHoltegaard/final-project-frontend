import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

const NavOptions = styled.nav`
  display: flex;
  border: white dashed 2px;
  justify-content: space-between;
  gap: 2rem;
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  &.active {
    text-decoration: underline;
  }
`

export const Navbar = () => {
  return (
    <div>
      <NavOptions>
        <div><StyledNavLink to="/">Home</StyledNavLink></div>
        <div><StyledNavLink to="/about">About</StyledNavLink></div>
        <div><StyledNavLink to="/contact">Contact</StyledNavLink></div>
        <div><StyledNavLink to="/shop">Shop</StyledNavLink></div>
      </NavOptions>
    </div>
  )
}