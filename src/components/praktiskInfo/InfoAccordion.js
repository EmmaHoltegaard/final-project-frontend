import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ui } from 'reducers/ui'
import styled, { css } from 'styled-components';
import triangle from 'svg/triangle.svg'
import { InfoAccordionData } from './InfoAccordionData';
import { TextWhite, Header2 } from '../GlobalStyles'

export const InfoAccordion = () => {
  const activeTopicId = useSelector((state) => state.ui.activeTopicId);
  const dispatch = useDispatch();
  // Toggle Function(s)
  const onTopicClick = (itemId) => {
    if (itemId === activeTopicId) {
      dispatch(ui.actions.toggleInfo(null))
    } else {
      dispatch(ui.actions.toggleInfo(itemId))
    }
  }
  return (
    <AccordionWrapper>
      {InfoAccordionData.map((item) => (
        <AccordionSectionWrapper key={item.id}>
          <TopicWrapper
            isActive={item.id === activeTopicId}
            onClick={() => onTopicClick(item.id)}>
            <Header2>{item.topic}</Header2>
            <ActiveIcon
              src={triangle}
              alt="triangle"
              isActive={item.id === activeTopicId} />
          </TopicWrapper>
          {item.id === activeTopicId && (
            <TextWrapper>
              <TextWhite>{item.text}</TextWhite>
            </TextWrapper>
          )}
        </AccordionSectionWrapper>
      ))}
    </AccordionWrapper>
  );
};

// pass props to change them slightly, when isActive = true.

const AccordionWrapper = styled.div`
  width: 90%;
  min-width: 320px;
  max-width: 1200px;
  /* border: greem solid 3px; */
`

const AccordionSectionWrapper = styled.div`
  border-bottom: pink solid 1px;
`

const TopicWrapper = styled.div`
  width: 100%;
  padding-left: 50px;
  padding-right: 50px; 
  height: 56px;
  /* border: purple dotted 2px; */
  background-color: var(--transparentWhite);
  display: flex; 
  align-items: center;
  justify-content: space-between;
`
const TextWrapper = styled.div`
  width: 100%;
  padding: 20px 30px 20px 30px;
  background-color: var(--purple);
  color: var(--white);
`

const ActiveIcon = styled.img`
height: 18px;
width: 18px;
transition: 0.5s;
${(props) => props.isActive && css`
  transform: scale(1.2) rotate(40deg);
`}
`
