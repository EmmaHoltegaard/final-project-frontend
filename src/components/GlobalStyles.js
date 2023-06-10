import styled from 'styled-components/macro'

export const Title = styled.h1`
  font-family: 'Courier Prime', 'Courier New', monospace;
  font-weight: 700;
  font-size: 1.625rem;
  line-height: 2rem;
  color: var(--purple);
`

export const Header1 = styled.h2`
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 2.375rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
`

export const Header2 = styled.h3`
  font-family: 'Courier Prime', 'Courier New', monospace;
  color: var(--purple);
  font-size: 1.375rem;
  font-weight: 700;
`

export const TextPurple = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  color: var(--purple);
  margin: 0 3px;
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

export const BoldSpan = styled.span`
  font-weight: 700;
`

export const SemiBoldSpan = styled.span`
  font-weight: 600;
`

export const IconButton = styled.button`
  border: none;
  background: none;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  font-family: 'Archivo', sans-serif;
`
