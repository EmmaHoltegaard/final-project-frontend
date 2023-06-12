import React from 'react';
import styled from 'styled-components'
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

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* width: 100%; */
  margin-top: 50px;
  /* border: red dotted 4px; */
`