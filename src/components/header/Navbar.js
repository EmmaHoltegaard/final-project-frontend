import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const Navbar = () => {
  return (
    <NavOptions>
      <div><StyledNavLink to="/">Forside</StyledNavLink></div>
      <div><StyledNavLink to="/praktiskInfo">Praktisk info</StyledNavLink></div>
      <div><StyledNavLink to="/minTilgang">Min tilgang</StyledNavLink></div>
      <div><StyledNavLink to="/kontakt">Kontakt mig</StyledNavLink></div>
      <div><StyledNavLink to="/shop">Butik</StyledNavLink></div>
    </NavOptions>
  )
}

const NavOptions = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: start;
    gap: 2rem;
    padding-top: 10px;
    text-align: center;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 700;
  color: var(--purple);
  font-size: 1.125rem;
  &.active {
    text-decoration: underline;
  }
  &:hover {
    text-decoration: underline;
  }
  @media (max-width: 1023px) {
    background-color: var(--purple);
    padding: 0.5em;
    border-bottom: 1px var(--white) solid;
    width: 100vw;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    &:hover {
      background-color: var(--lightPurple)
    }
  }
`