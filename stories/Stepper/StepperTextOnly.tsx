import React from 'react';
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement
} from '../../src';

const StepperTextOnly = () => {
  return (
    <StepperContainer>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' appendIcon='it-check'>
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile'>2/6</StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export default StepperTextOnly;
