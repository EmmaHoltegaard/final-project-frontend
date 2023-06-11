import React from 'react';
import styled from 'styled-components'
import { InfoAccordion } from './InfoAccordion';

export const PraktiskInfo = () => {
  return (
    <SectionWrapper>
      <InfoAccordion />
    </SectionWrapper>
  )
}

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  /* width: 100%; */
  margin-top: 50px;
  /* border: red dotted 4px; */
`