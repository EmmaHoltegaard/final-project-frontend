import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components/macro';

export const NavDropDown = () => {
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
  justify-content: space-between;
  padding-top: 10px;
  text-align: center;
  @media (min-width: 1024px) {
    display: none;
  }
`

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 700;
  color: var(--white);
  font-size: 1.125rem;
  background-color: var(--purple);
  padding: 0.5em;
  border-bottom: 1px var(--white) solid;
  width: 100vw;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  &.active {
    text-decoration: underline;
    background-color: var(--lightPurple)
  }
  &:hover {
    background-color: var(--lightPurple)
  }
  @media (min-width: 1024px) {
    display: none;
  }
`