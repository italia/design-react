import React from 'react';
import {
  StepperContainer,
  StepperHeader,
  StepperHeaderElement,
  Icon
} from '../../src';
const HeaderVariants = () => {
  return (
    <StepperContainer dark>
      <StepperHeader>
        <StepperHeaderElement variant='confirmed' iconName='it-check'>
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement>Label Step 3</StepperHeaderElement>
        <StepperHeaderElement variant='mobile'>2/6</StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          appendIcon='it-check'
          prependIcon='it-calendar'
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement variant='active' iconName='it-lock'>
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement iconName='it-settings'>
          Label Step 3
        </StepperHeaderElement>
        <StepperHeaderElement variant='mobile'>2/6</StepperHeaderElement>
      </StepperHeader>
      <StepperHeader>
        <StepperHeaderElement
          variant='confirmed'
          stepperNumber={<Icon icon='it-check' />}
        >
          Label Step 1
        </StepperHeaderElement>
        <StepperHeaderElement
          variant='active'
          noLine
          stepperNumber={<span>2</span>}
        >
          Label Step 2
        </StepperHeaderElement>
        <StepperHeaderElement stepperNumber={<span>3</span>}>
          Label Step 3
        </StepperHeaderElement>
      </StepperHeader>
    </StepperContainer>
  );
};

export default HeaderVariants;
