import React from 'react';
// import { useSelector } from 'react-redux'
import styled from 'styled-components/macro';
import { ProductList } from './ProductList'

export const Shop = () => {
  return (
    <SectionWrapper>
      <ProductList />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0 50px 0;
`
