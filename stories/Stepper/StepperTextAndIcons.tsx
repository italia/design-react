import React from 'react';
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement
} from '../../src';

const StepperTextAndIcons = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          appendIcon='it-check'
          prependIcon='it-calendar'
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' prependIcon='it-lock'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement prependIcon='it-settings'>
          Label Step 3
        </StepperHeaderElement>
        <StepperHeaderElement variant='mobile'>2/6</StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

StepperTextAndIcons.story = {
  name: 'Text and Icons'
};

export default StepperTextAndIcons;
