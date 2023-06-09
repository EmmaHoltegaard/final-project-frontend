import React from 'react';
import styled from 'styled-components';
import shoppingCart from 'svg/shopping-bag.svg';
import { IconButton } from '../GlobalStyles';

export const ShoppingCartIcon = ({ onCartClick }) => {
  return (
    <IconButton type="button" onClick={onCartClick}>
      <Icon src={shoppingCart} alt="shopping cart" /><ItemCount>0</ItemCount>
    </IconButton>
  )
}

const ItemCount = styled.span`
  background-color: var(--purple);
  font-size: 0.8rem;
  border-radius: 20px;
  padding: 0.1em 0.4em;
  color: white;
  position: absolute;
  bottom: 0;
  right: 0;
`

export const Icon = styled.img`
  height: 35px;
  width: 35px;
  position: absolute;
  margin-bottom: 5px;
`