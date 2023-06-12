/* eslint-disable no-underscore-dangle */
import { LoadingPage } from 'components/LoadingPage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { fetchProducts } from 'reducers/products';
import { Header1 } from 'components/GlobalStyles';
import { ProductListItem } from './ProductListItem';

export const ProductList = () => {
  const dispatch = useDispatch()
  // selects products from global state
  const productsList = useSelector((state) => state.products.items)

  // calls on thunk to fetch products from api.
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  const isLoading = useSelector((store) => store.ui.isLoading)

  if (isLoading) {
    return (
      <LoadingPage />
    )
  } else {
    return (
      <OuterWrapper>
        <Header>Butik</Header>
        <ListWrapper>
          {productsList.map((item) => (
            <ProductListItem key={item._id} item={item} />
          ))}
        </ListWrapper>
      </OuterWrapper>

    )
  }
}

// Styled components

const OuterWrapper = styled.div`
  width: 90%;
  max-width: 1050px;
  /* border: blue dotted 3px; */
  `

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;

`

const Header = styled(Header1)`
text-align: left;
margin-left: 25px;
`