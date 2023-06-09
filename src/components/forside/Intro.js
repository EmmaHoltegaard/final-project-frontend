import React from 'react';
import styled from 'styled-components'
import { Header1, TextWhite } from '../GlobalStyles'

export const Intro = () => {
  return (
    <SectionWrapper>
      <Header1White>Hvem er jeg?</Header1White>
      <TextWhite>
        This is where the text will go
      </TextWhite>
    </SectionWrapper>
  )
}

const Header1White = styled(Header1)`
  color: var(--white);
`
const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  background-color: var(--purple);
`