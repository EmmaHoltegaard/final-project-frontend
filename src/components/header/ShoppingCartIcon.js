import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import shoppingCart from 'svg/shopping-bag.svg';
import { IconButton } from '../GlobalStyles';

export const ShoppingCartIcon = ({ onCartClick }) => {
  const selectedItems = useSelector((store) => store.cart.items)
  const selectedItemsCount = selectedItems.reduce((total, item) => total + item.quantity, 0)
  return (
    <IconButton type="button" onClick={onCartClick}>
      <Icon src={shoppingCart} alt="shopping cart" /><ItemCount>{selectedItemsCount}</ItemCount>
    </IconButton>
  )
}

// Styled Components

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