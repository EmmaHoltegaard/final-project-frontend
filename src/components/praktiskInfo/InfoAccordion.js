import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ui } from 'reducers/ui'
import styled from 'styled-components';
import { InfoAccordionData } from './InfoAccordionData';

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
    <section>
      {InfoAccordionData.map((item) => (
        <div key={item.id}>
          <TopicWrapper
            isActive={item.id === activeTopicId}
            onClick={() => onTopicClick(item.id)}>
            {item.topic}
          </TopicWrapper>
          {item.id === activeTopicId && <TextWrapper>{item.text}</TextWrapper>}
        </div>
      ))}
    </section>
  );
};

// pass props to change them slightly, when isActive = true.

const TopicWrapper = styled.div`
border: purple dotted 2px;
`
const TextWrapper = styled.div`
border: pink dashed 2px;`