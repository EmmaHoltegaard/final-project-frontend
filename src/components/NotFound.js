import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'lotties/not-found'
import styled from 'styled-components';
import { Header1 } from './GlobalStyles';

export const NotFound = () => {
  return (
    <SectionWrapper>
      <Header1>Page not found</Header1>
      <Player
        autoplay
        controls
        loop
        mode="normal"
        src={animationData}
        style={{ height: '250px', width: '300px' }} />
    </SectionWrapper>
  )
}

// Styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  /* border: blue dotted 1px; */
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`