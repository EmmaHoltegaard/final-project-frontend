import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro';
import { ui } from 'reducers/ui'
import { Navbar } from './Navbar';
import { ShoppingCartIcon } from './ShoppingCartIcon';
import { ShoppingCart } from '../shop/ShoppingCart'
import { HamburgerIcon } from './HamburgerIcon';
import { HamburgerMenu } from './HamburgerMenu';
import { Title } from '../GlobalStyles'

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

  // On large screens: LargeScreenNav is mounted
  // On small screens: SmallScreenNav is mounted.
  // if menuIsActive = true, the navmenu will show
  // if cartIsActive = true, the cart will show

  return (
    <section>
      <HeaderWrapper>
        <LeftWrapper>
          <Title>Normfri <br /> terapi</Title>
        </LeftWrapper>
        <RightWrapper>
          <LargeScreenNav>
            <Navbar />
          </LargeScreenNav>
          <SmallScreenNav>
            <HamburgerIcon onMenuClick={onMenuClick} />
          </SmallScreenNav>
          <ShoppingCartIcon onCartClick={onCartClick} />
        </RightWrapper>
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
  height: 10rem;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  align-items: center;
`

const LeftWrapper = styled.div`
  display: flex;
`

const RightWrapper = styled.div`
  display: flex;
  gap: 20px;
`

const LargeScreenNav = styled.div`
  display: none;
  @media (min-width: 1024px) {
    display: flex;
    width: 525px;
    margin-right: 10px;
  }
`

const SmallScreenNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  @media (min-width: 1024px) {
    display: none;
  }
`

const ShoppingCartWrapper = styled.div`
  border: blue dotted 2px;
`