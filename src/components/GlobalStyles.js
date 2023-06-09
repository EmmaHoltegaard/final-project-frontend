import styled from 'styled-components'

/*
Overskrift (font 36, h2, courier)
Button (purple, white font, )
span: bold - boldSpan
paragraph 18px
*/

export const Title = styled.h1`
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2rem;
  color: var(--purple);
  margin-bottom: 1rem;
`

export const Header1 = styled.h2`
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 2.375rem;
  font-weight: 700;
  text-align: center;
`

export const Header2 = styled.h3`
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 1.375rem;
  font-weight: 700;
`

export const TextPurple = styled.p`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: var(--purple);
`

export const TextWhite = styled(TextPurple)`
  color: var(--white);
`

export const StyledButton = styled.button`
  border: none;
  background-color: var(--purple);
  font-family: 'Archivo', sans-serif;
  font-size: 1rem;
  padding: 0.4em;
  color: var(--white);
  border-radius: 7px;
  &:hover {
    background-color: var(--darkPurple);
    cursor: pointer;
  }
`

// add changes to button inside relevant component

export const BoldSpan = styled.span`
  font-weight: 700;
`

export const SemiBoldSpan = styled.span`
  font-weight: 600;
`