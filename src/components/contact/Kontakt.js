import React from 'react';
import styled from 'styled-components/macro';
import { TextPurple, BoldSpan, Header1 } from '../GlobalStyles'
import { ContactForm } from './ContactForm'

export const Kontakt = () => {
  return (
    <SectionWrapper>
      <TextWrapper>
        <Header1>Kontakt mig</Header1>
        <TextPurple>
          Hvis du er interesseret i at komme i forløb hos mig er du velkommen til at række ud
          via kontaktformularen her eller ved at sende en mail
          direkte til <BoldSpan>normfri.terapi@gmail.com</BoldSpan>
        </TextPurple>
        <TextPurple>
          Repræsenterer du en forening, er du fagperson, eller på anden vis mulig samarbejdspartner
          og interesseret i et kaffemøde eller eventuelt samarbejde er du også velkommen til
          at kontakte mig på overstående mailadresse.
        </TextPurple>
        <TextPurple>
          <BoldSpan>Jeg ser frem til at høre fra dig.</BoldSpan>
        </TextPurple>
      </TextWrapper>
      <ContactForm />
    </SectionWrapper>

  )
}

const SectionWrapper = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
animation: fadeIn 0.5s;
    @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
    }
`

const TextWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 10px;
width: 50%;
min-width: 300px;
max-width: 575px;
text-align: center;
margin: 50px auto;
`