/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { StyledButton, ProductName, Price } from '../GlobalStyles'

export const ProductListItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <ProductWrapper key={item._id}>
      <TopWrapper>
        <Link to={`/shop/item/${item._id}`}><StyledImage src={item.imgUrl} alt={`${item.name}`} /></Link>
        <TextWrapper>
          <PlainLink to={`/shop/item/${item._id}`}><ProductName>{item.name}</ProductName></PlainLink>
          <Price>{item.price} dkk</Price>
        </TextWrapper>
      </TopWrapper>
      <BottomWrapper>
        <StyledButton type="button" onClick={() => dispatch(cart.actions.addItem(item))}>Tilføj til kurv</StyledButton>
      </BottomWrapper>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  width: 245px;
  background: var(--transparentWhite);
  padding: 22px;
  border-radius: 5px;
  height: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const TopWrapper = styled.div`
`

const StyledImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
`

const TextWrapper = styled.div`
  margin-top: 7px;
`

const PlainLink = styled(Link)`
  text-decoration: none;
`

const BottomWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`