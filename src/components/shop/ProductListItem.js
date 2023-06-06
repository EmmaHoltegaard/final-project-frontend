/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch } from 'react-redux'
import { cart } from 'reducers/cart'
import styled from 'styled-components'

const StyledImage = styled.img`
width: 150px;
height: 150px;
object-fit: cover;
`

export const ProductListItem = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div key={item._id}>
      <StyledImage src={item.imgUrl} alt={`${item.name}`} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <button type="button" onClick={() => dispatch(cart.actions.addItem(item))}>Tilføj til kurv</button>
    </div>
  )
}