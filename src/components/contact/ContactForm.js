/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser'
import styled from 'styled-components/macro';

export const ContactForm = () => {
  const form = useRef();
  const [isSubmitted, setIsSubmitted] = useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then((result) => {
        console.log(result.text);
        console.log('Beskeden blev sendt')
        setIsSubmitted(true)
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <FormWrapper>
      <form ref={form} onSubmit={sendEmail}>
        <StyledLabel htmlFor="name">Name*</StyledLabel>
        <StyledInput id="name" type="text" name="user_name" required />

        <StyledLabel htmlFor="">Email*</StyledLabel>
        <StyledInput type="email" name="user_email" required />

        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <StyledInput id="phone" type="tel" name="user_phone" />

        <StyledLabel htmlFor="pronouns">Pronouns</StyledLabel>
        <StyledInput id="pronouns" type="text" name="user_pronouns" />

        <StyledLabel htmlFor="message">Message*</StyledLabel>
        <StyledTextAreaInput id="message" name="message" required />

        <ButtonWrapper>
          <SubmitButton type="submit">send</SubmitButton>
        </ButtonWrapper>
        {isSubmitted && <p>Din besked blev sendt.</p>}
      </form>
    </FormWrapper>

  );
};

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

  form {
    display: flex;
    flex-direction: column;
  }
`

const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 1.125rem;
  font-weight: 700;
  gap: 5px;
  min-width: 240px;
  margin-bottom: 5px;
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
  margin-bottom: 25px;
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
  margin-bottom: 25px;
  &:focus {
    border-color: var(--purple)
  }
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SubmitButton = styled.button`
  font-size: 1.25rem;
  width: 130px;
  border: none;
  background-color: var(--purple);
  font-family: 'Archivo', sans-serif;
  padding: 0.4em;
  color: var(--white);
  border-radius: 7px;
  &:hover {
    background-color: var(--darkPurple);
    cursor: pointer;
  }
`