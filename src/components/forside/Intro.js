import React from 'react';
import styled from 'styled-components/macro'
import lineart from 'svg/lineart1.svg'
import profilBillede from 'images/rebekka-profilbillede.jpg'
import { Header1, TextWhite } from '../GlobalStyles'

export const Intro = () => {
  return (
    <SectionWrapper>
      <ContentWrapper>
        <TextWrapper>
          <Header1White>Hvem er jeg?</Header1White>
          <TextWhite>
          Mit navn er Rebekka Pi og jeg er normkritisk terapeut.
          Jeg blev certificeret i 2023 og har derudover mere end 10 års erfaring
          med arbejdet med mennesker,
          som mentor, underviser og rådgiver.
          Siden 2021 har jeg været normkritisk rådgiver hos AIDS-Fondet,
          hvor jeg har været med til at starte en klinik op i Aalborg.
          Måske du har mødt mig dér før, måske er det første gang, du støder på mig
          – uanset hvad er du meget velkommen i min terapeutiske praksis.
          </TextWhite>
        </TextWrapper>
        <ImageWrapper>
          <Lineart src={lineart} alt="lineart" />
          <Image src={profilBillede} alt="Rebekka" />
        </ImageWrapper>
      </ContentWrapper>
    </SectionWrapper>
  )
}

// Styled components

const SectionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: var(--purple);
  padding-top: 150px;
  padding-bottom: 100px;
`

const Header1White = styled(Header1)`
  color: var(--white);
`

const ContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
    gap: 20px;
  }
`

const TextWrapper = styled.div`
width: 320px;
text-align: justify;
display: flex;
flex-direction: column;
align-items: flex-end;
padding: 5px;
@media (max-width: 1023px) {
    align-items: flex-start;
  }
`
const ImageWrapper = styled.div`
  position: relative;
  height: 369px;
  width: 325px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Image = styled.img`
  background: var(--white);
  border: 8px solid var(--pink);
  width: 300px;
  height: 289px;
  object-fit: cover;
  position: absolute;
  top: 0;
  @media (min-width: 1024px) {
    position: absolute;
    left: 0;
    width: 208px;
  }
`

const Lineart = styled.img`
  height: 233px;
  width: 233px;
  position: Absolute;
  right: 0;
  top: -80px;
  @media (max-width: 1023px) {
    right: -50px;
    top: 140px;
  }
  @media (max-width: 440px) {
    right: 0px;
    top: 170px;
  }
`