import React from 'react';
import menu from 'svg/menu.svg'
import styled from 'styled-components/macro';
import { IconButton } from '../GlobalStyles'

export const HamburgerIcon = ({ onMenuClick }) => {
  return (
    <IconButton type="button" onClick={onMenuClick}>
      <Icon src={menu} alt="hamburger menu" />
    </IconButton>
  )
}

// Styled components

const Icon = styled.img`
height: 50px;
width: 50px;
`
