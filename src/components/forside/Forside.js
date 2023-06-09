import React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import head from 'svg/head.svg'
import { Intro } from './Intro'
import { Uddannelse } from './Uddannelse'
import { Header1, StyledButton, TextPurple } from '../GlobalStyles'

export const Forside = () => {
  return (
    <>
      <SectionWrapper>
        <ContentWrapper>
          <Image src={head} alt="head" />
          <TextWrapper>
            <InnerTextWrapper>
              <Header1>Normfri terapi <br /><StyledSpan>/v Rebekka Pi</StyledSpan></Header1>
              <WelcomeText>Velkommen til - dejligt du er her.</WelcomeText>
            </InnerTextWrapper>
            <Link to="/kontakt"><Button type="button">Kontakt mig</Button></Link>
          </TextWrapper>
        </ContentWrapper>
      </SectionWrapper>
      <Intro />
      <Uddannelse />
    </>
  )
}

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 75vh;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 0 20px 0;
  gap: 25px;
  align-items: center;
  margin-bottom: 30px;
  @media (min-width: 620px) {
    flex-direction: row;
    gap: 5px;
  }
`

const Image = styled.img`
  height: 198px;
`

const TextWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`

const InnerTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40px;
`

const WelcomeText = styled(TextPurple)`
  font-weight: 400;
`

const Button = styled(StyledButton)`
  background-color: var(--lightPurple);
  width: fit-content;
  padding: 0.6em 1.2em;
  border-radius: 25px;
  font-size: 1.125rem;
  &:Hover{
    background-color: var(--purple);
  }
`

const StyledSpan = styled.span`
  font-size: 2rem;
`