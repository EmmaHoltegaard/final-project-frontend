import React from 'react';
import styled from 'styled-components/macro'
import { Header1 } from 'components/GlobalStyles';
import { InfoAccordion } from './InfoAccordion';

export const PraktiskInfo = () => {
  return (
    <SectionWrapper>
      <Header1>Praktisk Info</Header1>
      <InfoAccordion />
    </SectionWrapper>
  )
}

// Styled components:

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  animation: fadeIn 0.5s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`