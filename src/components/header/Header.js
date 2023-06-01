import React from 'react';
import styled from 'styled-components';
import { Navbar } from './Navbar';
import { ShoppingCartIcon } from './ShoppingCartIcon';

const HeaderWrapper = styled.header`
  border: pink dotted 4px;
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export const Header = () => {
  return (
    <HeaderWrapper>
      <div>ICON + NAME</div>
      <Navbar />
      <ShoppingCartIcon />
    </HeaderWrapper>
  )
}