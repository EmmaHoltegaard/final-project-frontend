import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components';
import { ui } from 'reducers/ui'
import { Navbar } from './Navbar';
import { ShoppingCartIcon } from './ShoppingCartIcon';
import { ShoppingCart } from '../shop/ShoppingCart'
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu } from './HamburgerMenu';

export const Header = () => {
  // selector to get the current state.
  const cartIsActive = useSelector((state) => state.ui.cartIsActive);
  const menuIsActive = useSelector((state) => state.ui.menuIsActive)
  // define dispatch
  const dispatch = useDispatch();
  // Toggle Function(s)
  const onCartClick = () => {
    dispatch(ui.actions.toggleCart())
  }
  const onMenuClick = () => {
    dispatch(ui.actions.toggleMenu())
  }

  // mount both icon and navbar(one shows on big screen, one doesn't). Add toggle to icon.
  return (
    <section>
      <HeaderWrapper>
        <div>ICON + NAME</div>
        <LargeScreenNav>
          <Navbar />
        </LargeScreenNav>
        <SmallScreenNav>
          <HamburgerIcon onMenuClick={onMenuClick} />
        </SmallScreenNav>
        <ShoppingCartIcon onCartClick={onCartClick} />
      </HeaderWrapper>
      {menuIsActive && (
        <HamburgerMenu />
      )}
      {cartIsActive && (
        <ShoppingCartWrapper>
          <ShoppingCart />
        </ShoppingCartWrapper>
      )}
    </section>
  )
}

// styled components
const HeaderWrapper = styled.header`
  border: pink dotted 4px;
  height: 10rem;
  display: flex;
  justify-content: space-around;
  align-items: center;

`
const LargeScreenNav = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: block;
  }
`

const SmallScreenNav = styled.div`
  display: block;
  @media (min-width: 1024px) {
    display: none;
  }
`

const ShoppingCartWrapper = styled.div`
  border: blue dotted 2px;
`