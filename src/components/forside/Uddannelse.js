import React from 'react';
import styled from 'styled-components/macro'
import lineart2 from 'svg/lineart2.svg'
import { Header1, TextPurple, BoldSpan, SemiBoldSpan } from '../GlobalStyles'
import { UddannelseData } from './UddannelseData';
import { KurserData } from './KurserData';

export const Uddannelse = () => {
  return (
    <SectionWrapper>
      <Image src={lineart2} alt="lineart" />
      <ContentWrapper>
        <ExperienceWrapper>
          <Header1>Uddannelse</Header1>
          {UddannelseData.map((item) => (
            <Experience key={item.id}>
              <BoldSpan>{item.year}: </BoldSpan>
              {item.description}
              <br />
              <SemiBoldSpan> {item.source}</SemiBoldSpan>
            </Experience>
          ))}
        </ExperienceWrapper>
        <ExperienceWrapper>
          <Header1>Kurser</Header1>
          {KurserData.map((item) => (
            <Experience key={item.id}>
              <BoldSpan>{item.description}</BoldSpan> » {item.source}
            </Experience>
          ))}
        </ExperienceWrapper>
      </ContentWrapper>
    </SectionWrapper>
  )
}

// Styled Components

const SectionWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--pink);
`

const Image = styled.img`
  height: 491px;
  width: 206px;
  margin-top: 0;
  @media (max-width: 550px) {
    display:none;
  }
`

const ContentWrapper = styled.div`
  margin-top: 100px;
  margin-right: 40px;
  min-width: 320px;
  margin: 100px 40px 70px 0;
  @media (max-width: 550px) {
    width: 320px;
    margin: 100px auto 70px auto;
  }
`

const ExperienceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 30px;
`

const Experience = styled(TextPurple)`
  margin-bottom: 10px;
`