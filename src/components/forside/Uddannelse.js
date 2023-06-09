import React from 'react';
import styled from 'styled-components'
import lineart2 from 'svg/lineart2.svg'
import { Header1, TextPurple } from '../GlobalStyles'

export const Uddannelse = () => {
  return (
    <SectionWrapper>
      <Image src={lineart2} alt="lineart" />
      <Header1>Uddannelse</Header1>
      <TextPurple>jobs jobs jobs</TextPurple>
    </SectionWrapper>
  )
}

const Image = styled.img`
  border: pink dotted 4px;
`

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  background-color: var(--pink);
`