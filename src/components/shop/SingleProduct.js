import { LoadingPage } from 'components/LoadingPage';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components/macro'
import { cart } from 'reducers/cart'
import { useParams, useNavigate } from 'react-router-dom'
import { fetchSingleProduct } from 'reducers/products';
import { ProductName, Price, TextPurple, StyledButton, IconButton } from 'components/GlobalStyles';
import backArrow from 'svg/arrow-back.svg'

export const SingleProduct = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const product = useSelector((state) => state.products.singleItem);

  // calls on thunk to fetch single products from api.
  useEffect(() => {
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch])

  const isLoading = useSelector((store) => store.ui.isLoading)

  const onBackButtonClick = () => {
    navigate(-1)
  };

  if (isLoading) {
    return (
      <SectionWrapper>
        <LoadingPage />
      </SectionWrapper>
    )
  }
  return (
    <SectionWrapper>
      <BackButtonWrapper>
        <BackButton type="button" onClick={onBackButtonClick}>
          <Icon src={backArrow} alt="arrow" />
          <TextPurple>Tilbage</TextPurple>
        </BackButton>
      </BackButtonWrapper>
      <ProductWrapper>
        <StyledImage src={product.imgUrl} alt="Produkt" />
        <TextOuterWrapper>
          <TextInnerWrapper>
            <ProductName>{product.name}</ProductName>
            <Price>{product.price} dkk</Price>
            <Description>{product.description}</Description>
          </TextInnerWrapper>
          <ButtonWrapper>
            <StyledButton type="button" onClick={() => dispatch(cart.actions.addItem(product))}>Tilføj til kurv</StyledButton>
          </ButtonWrapper>
        </TextOuterWrapper>
      </ProductWrapper>
    </SectionWrapper>
  )
}

// Styled components

const SectionWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px 0 50px 0;
  width: 100vw;
  `

const ProductWrapper = styled.div`
  background-color: var(--transparentWhite);
  width: 85%;
  max-width: 600px;
  min-width: 300px;
  padding: 45px;
  display: flex;
  justify-content: center;
  gap: 15px;
  border-radius: 10px;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`

const StyledImage = styled.img`
  width: 40%;
  /* max-width: 200px; */
  height: 200px;
  object-fit: cover;
  @media (max-width: 550px) {
    width: 100%;
    max-width: 100%;
  }

`

const TextOuterWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* border: blue dotted 2px; */
  @media (max-width: 550px) {
    width: 100%;
  }
`

const TextInnerWrapper = styled.div`

`

const Description = styled(TextPurple)`
  font-size: 1rem;
  margin: 10px 0 30px 0;
`

const ButtonWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`

const BackButton = styled(IconButton)`
  width: fit-content;
  transition: 0.5s;
  &:hover {
    transform: scale(1.2)
  }
`

const BackButtonWrapper = styled.div`
  width: 85%;
  max-width: 600px;
  min-width: 300px;
  `

const Icon = styled.img`
  width: 20px;
  height: 20px;
`