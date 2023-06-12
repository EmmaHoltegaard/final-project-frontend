import React, { useState } from 'react';
import { BASE_URL } from 'utils/urls';
import styled from 'styled-components/macro';
import { StyledButton } from 'components/GlobalStyles';

export const ContactForm = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...')
    const { name, email, phone, pronouns, message } = e.target.elements;
    const details = {
      name: name.value,
      email: email.value,
      phone: phone.value,
      pronouns: pronouns.value,
      message: message.value
    };
    const response = await fetch(`${BASE_URL}contact`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(details)
    });
    setStatus('Submit');
    const result = await response.json()
    alert(result.status)
  };
  return (
    <FormWrapper>
      <StyledForm onSubmit={handleSubmit}>
        <StyledLabel htmlFor="name">
            Navn*:
          <StyledInput id="name" type="text" required />
        </StyledLabel>
        <StyledLabel htmlFor="email">
            Email*:
          <StyledInput id="email" type="email" required />
        </StyledLabel>
        <StyledLabel htmlFor="phone">
            Telefon:
          <StyledInput id="phone" type="tel" />
        </StyledLabel>
        <StyledLabel htmlFor="pronouns">
            Foretrukne pronominer:
          <StyledInput id="pronouns" type="text" />
        </StyledLabel>
        <StyledLabel htmlFor="message">
            Hvad drejer henvendelsen sig om?*:
          <StyledTextAreaInput id="message" required />
        </StyledLabel>
        <ButtonWrapper>
          <SubmitButton type="submit">{status}</SubmitButton>
        </ButtonWrapper>
      </StyledForm>
    </FormWrapper>
  )
}

// Styled Components

const FormWrapper = styled.div`
  background: var(--transparentWhite);
  width: 75%;
  min-width: 315px;
  max-width: 480px;
  padding: 60px 50px;
  border-radius: 20px;
  margin-bottom: 50px;
  @media (max-width: 460px) {
    width: 100%;
    padding: 50px 30px;
  }
`

const StyledForm = styled.form`
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 1.125rem;
  font-weight: 700;
  gap: 5px;
  margin-bottom: 35px;
  min-width: 240px;
`

const StyledInput = styled.input`
  padding: 15px;
  border-radius: 4px;
  font-family: 'Archivo', sans-serif;
  font-size: 1rem;
  border: none;
  color: var(--purple);
  outline: none;
  border: 2px solid transparent;
  &:focus {
    border-color: var(--purple)
  }
`

const StyledTextAreaInput = styled.textarea`
  padding: 15px;
  border-radius: 4px;
  font-family: 'Archivo', sans-serif;
  font-size: 1rem;
  border: none;
  color: var(--purple);
  height: 200px;
  outline: none;
  border: 2px solid transparent;
  &:focus {
    border-color: var(--purple)
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubmitButton = styled(StyledButton)`
  font-size: 1.25rem;
  width: 130px;
`