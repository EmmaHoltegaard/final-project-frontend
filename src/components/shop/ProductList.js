/* eslint-disable no-underscore-dangle */
import { LoadingPage } from 'components/LoadingPage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { fetchProducts } from 'reducers/products';
import { ProductListItem } from './ProductListItem';

export const ProductList = () => {
  const dispatch = useDispatch()
  const productsList = useSelector((state) => state.products.items)

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
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 45px;
  `

const ListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  animation: fadeIn 0.5s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`