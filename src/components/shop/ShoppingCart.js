/* eslint-disable no-underscore-dangle */
import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { cart } from 'reducers/cart'
import { ui } from 'reducers/ui'
import { Header2, StyledButton, IconButton, TextPurple } from 'components/GlobalStyles';
import trashcan from 'svg/trashcan.svg'

export const ShoppingCart = () => {
  const selectedItems = useSelector((store) => store.cart.items)
  const dispatch = useDispatch()
  const totalPrice = useSelector((store) => (
    store.cart.items.reduce((total, item) => (total + (item.price * item.quantity)), 0)
  ))

  const onXClick = () => {
    dispatch(ui.actions.toggleCart())
  }

  if (totalPrice === 0) {
    return (
      <CartWrapper>
        <CartInnerWrapper>
          <TopCartWrapper>
            <Header2>Indkøbskurv</Header2>
            <CartXButton type="button" onClick={onXClick}>
              <ButtonContent>X</ButtonContent>
            </CartXButton>
          </TopCartWrapper>
          <TextPurple>Din kurv er tom</TextPurple>
        </CartInnerWrapper>
      </CartWrapper>
    )
  }
  return (
    <CartWrapper>
      <CartInnerWrapper>
        <TopCartWrapper>
          <Header2>Indkøbskurv</Header2>
          <CartXButton type="button" onClick={onXClick}>
            <ButtonContent>X</ButtonContent>
          </CartXButton>
        </TopCartWrapper>
        <MiddleCartWrapper>
          {selectedItems.map((item) => (
            <ListItem key={item._id}>
              <ListItemInnerWrapper>
                <CartItem>{item.quantity} x {item.name} ({item.price} kr)</CartItem>
                <CartXButton type="button" onClick={() => dispatch(cart.actions.removeItem(item))}>
                  <ButtonContent><Icon src={trashcan} alt="trashcan" /></ButtonContent>
                </CartXButton>
              </ListItemInnerWrapper>
            </ListItem>))}
        </MiddleCartWrapper>
        <BottomCartWrapper>
          <Total>I alt: {totalPrice} dkk</Total>
          <StyledButton type="button" onClick="">Gå til betaling</StyledButton>
        </BottomCartWrapper>
      </CartInnerWrapper>
    </CartWrapper>
  )
}

// Styled components
const CartWrapper = styled.section`
  min-height: 150px;
  padding: 25px 60px;
  margin-bottom: 25px;
  background-color: var(--transparentWhite);
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 520px) {
    padding: 25px 25px;
  }
`

const CartInnerWrapper = styled.div`
  width: 90%;
  max-width: 1050px;
  height: 100%;
`

const TopCartWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

`

const MiddleCartWrapper = styled.ul`
  margin: 15px 0 35px 0;
`

const BottomCartWrapper = styled.div`
  display: flex;
  /* border: red dotted 2px; */
  align-items: flex-end;
  gap: 20px;
  justify-content: flex-end;
`

const CartItem = styled(TextPurple)`
  font-size: 1rem;
`

const ListItem = styled.li`
  color: var(--purple);
  margin-bottom: 5px;
`

const ListItemInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 65%;
  min-width: 200px;
  max-width: 475px;
`

const CartXButton = styled(IconButton)`
  height: fit-content;
  width: fit-content;
  /* border: blue dashed 2px; */
  border: none;
`

const Icon = styled.img`
  height: 25px;
  width: 20px;
`

const ButtonContent = styled.span`
  color: var(--purple);
  font-weight: 700;
  font-family: 'Archivo', sans-serif;
  font-size: 1.125rem;
`

const Total = styled.p`
  font-weight: 400;
  font-size: 0.8rem;
  color: var(--purple);
`