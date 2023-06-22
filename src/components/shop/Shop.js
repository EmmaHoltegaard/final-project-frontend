import React from 'react';
import styled from 'styled-components/macro';
import { ProductList } from './ProductList'
import { Header1 } from '../GlobalStyles'

export const Shop = () => {
  return (
    <SectionWrapper>
      <Header1>
        Butik
      </Header1>
      <ProductList />
    </SectionWrapper>
  )
}

// Styled components

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0 50px 0;
  animation: fadeIn 0.5s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`
