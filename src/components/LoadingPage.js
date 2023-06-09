import React from 'react'
import styled from 'styled-components/macro'
import { Player } from '@lottiefiles/react-lottie-player'
import animationData from 'lotties/rainbow2'

export const LoadingPage = () => {
  return (
    <LoaderWrapper>
      <Player
        autoplay
        controls
        loop
        mode="normal"
        src={animationData}
        style={{ height: '200px', width: '150px' }} />
    </LoaderWrapper>
  )
}

// Styled components

const LoaderWrapper = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`