import React from 'react';
import styled from 'styled-components/macro'
import { Header1, TextPurple } from './GlobalStyles'

export const MinTilgang = () => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <Header1>Min tilgang</Header1>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
        <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute irure dolor in reprehenderit
        in voluptate velit esse cillum dolore eu fugiat
        nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text>
      </TextWrapper>
    </SectionWrapper>
  )
}

// Styled components
const SectionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TextWrapper = styled.div`
  margin: 50px auto;
  width: 70%;
  min-width: 320px;
  max-width: 550px;
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Text = styled(TextPurple)`
  text-align: justify;
`