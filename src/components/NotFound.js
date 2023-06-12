import React from 'react';
import { Link } from 'react-router-dom'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'lotties/not-found'
import styled from 'styled-components';
import { Header2, StyledButton } from './GlobalStyles';

export const NotFound = () => {
  return (
    <SectionWrapper>
      <PlayerWrapper>
        <Player
          autoplay
          controls
          loop
          mode="normal"
          src={animationData}
          style={{ height: '100%', width: '100%' }} />
      </PlayerWrapper>
      <Text>Vi kan desværre ikke finde den side du leder efter.</Text>
      <Link to="/"><Button type="button">Tilbage til forsiden</Button></Link>
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
  margin-top: 50px;
`

const PlayerWrapper = styled.div`
width: 75%;
max-width: 550px;
min-width: 300px;
`

const Text = styled(Header2)`
  width: 50%;
  max-width: 450px;
  min-width: 300px;
  text-align: center;
  margin: 40px auto;
`

const Button = styled(StyledButton)`
  padding: 0.5em;
  background-color: var(--purple);
  &:hover {
    background-color: var(--lightPurple);
  }
`